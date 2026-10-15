import config from "@payload-config";
import { getPayload } from "payload";

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// optional ping about a new request; the request itself is already saved in the admin
async function notifyTelegram(lines: string[]) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return;

  const sent = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat, text: lines.join("\n"), parse_mode: "HTML" }),
  }).catch(() => null);
  if (!sent?.ok) console.error("telegram", sent?.status, await sent?.text().catch(() => ""));
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ error: "bad-request" }, { status: 400 });

  // bots fill every field, people never see this one
  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, 100);
  const phone = text(body.phone, 30);
  const area = text(body.area, 10);
  const place = text(body.place, 150);
  const ids = Array.isArray(body.services)
    ? body.services.filter((id: unknown): id is string => typeof id === "string" && /^\d{1,9}$/.test(id)).slice(0, 50)
    : [];
  const digits = phone.replace(/\D/g, "");
  if (!name || digits.length < 9 || digits.length > 15 || ids.length === 0 || (area && !/^\d{1,6}$/.test(area))) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const payload = await getPayload({ config });
  const picked = (
    await payload.find({ collection: "services", where: { id: { in: ids } }, sort: "_order", limit: 0, depth: 0 })
  ).docs;
  if (picked.length === 0) return Response.json({ error: "invalid" }, { status: 400 });

  const saved = await payload
    .create({
      collection: "requests",
      data: {
        status: "new",
        name,
        phone,
        area: area ? Number(area) : undefined,
        place: place || undefined,
        servicesText: picked.map((service) => service.title).join("\n"),
      },
    })
    .catch((error) => {
      console.error("request save", error);
      return null;
    });
  if (!saved) return Response.json({ error: "save-failed" }, { status: 500 });

  await notifyTelegram(
    [
      "<b>Yeni müraciət</b>",
      "",
      `<b>Ad:</b> ${escape(name)}`,
      `<b>Telefon:</b> ${escape(phone)}`,
      area ? `<b>Sahə:</b> ${area} m²` : null,
      place ? `<b>Ünvan:</b> ${escape(place)}` : null,
      "",
      "<b>Xidmətlər:</b>",
      ...picked.map((service) => `• ${escape(service.title)}`),
    ].filter((line): line is string => line !== null),
  );

  return Response.json({ ok: true });
}
