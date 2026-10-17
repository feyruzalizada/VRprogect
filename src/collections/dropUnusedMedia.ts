import type {
  CollectionAfterDeleteHook,
  CollectionBeforeDeleteHook,
  PayloadRequest,
} from "payload";

type FileRef = number | { id: number } | null | undefined;

// removes files nobody points at any more; news versions count too, their image column cannot be emptied
async function dropUnusedMedia(req: PayloadRequest, files: FileRef[]) {
  const ids = new Set(files.map((file) => (typeof file === "object" ? file?.id : file)).filter(Boolean));

  for (const id of ids) {
    const counts = await Promise.all([
      req.payload.count({
        collection: "services",
        where: { or: [{ video: { equals: id } }, { poster: { equals: id } }] },
        req,
      }),
      req.payload.count({ collection: "news", where: { image: { equals: id } }, req }),
      req.payload.countVersions({ collection: "news", where: { "version.image": { equals: id } }, req }),
    ]);
    if (counts.some((count) => count.totalDocs > 0)) continue;

    // a bulk delete runs these hooks side by side, so another one may have removed the file already
    await req.payload.delete({ collection: "media", id: id as number, req }).catch(() => undefined);
  }
}

// files of versions about to be deleted, per request; Payload swaps req.context between the two hooks
const olderFiles = new WeakMap<PayloadRequest, Map<string, FileRef[]>>();

// a deleted doc takes its files along, including ones only its older versions used
export function dropFilesOnDelete(collection: "services" | "news", fields: string[]) {
  const collect: CollectionBeforeDeleteHook = async ({ id, req }) => {
    // the versions are gone by the time afterDelete runs, so their files are noted here
    const { docs } = await req.payload.findVersions({
      collection,
      where: { parent: { equals: id } },
      limit: 0,
      depth: 0,
      req,
    });
    const files = olderFiles.get(req) ?? new Map<string, FileRef[]>();
    files.set(
      `${collection}:${id}`,
      docs.flatMap((version) => fields.map((field) => (version.version as unknown as Record<string, FileRef>)[field])),
    );
    olderFiles.set(req, files);
  };

  const drop: CollectionAfterDeleteHook = ({ doc, req }) => {
    const older = olderFiles.get(req)?.get(`${collection}:${doc.id}`) ?? [];
    return dropUnusedMedia(req, [...fields.map((field) => doc[field]), ...older]);
  };

  return { beforeDelete: [collect], afterDelete: [drop] };
}
