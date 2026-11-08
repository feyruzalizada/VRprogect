import type { Field } from "payload";

// a copy of a field for a translation tab: same shape, never required and no default, so an empty
// translation simply falls back to the Azerbaijani text on the site
function optional(field: Field): Field {
  const copy = { ...field } as Field & { required?: boolean; defaultValue?: unknown; fields?: Field[]; admin?: Record<string, unknown> };
  delete copy.required;
  delete copy.defaultValue;
  if (copy.fields) copy.fields = copy.fields.map(optional);
  if (copy.admin) copy.admin = { ...copy.admin, initCollapsed: true };
  return copy;
}

const note = {
  az: "Boş qalan sahədə saytda azərbaycanca mətn göstərilir.",
  ru: "Если поле пустое, на сайте показывается текст на азербайджанском.",
  en: "Where a field is left empty, the site shows the Azerbaijani text.",
};

// the Azerbaijani fields stay where they are (an unnamed tab keeps their columns),
// English and Russian live in named tabs beside them
export function withTranslations(fields: Field[], translatable: Field[]): Field[] {
  return [
    {
      type: "tabs",
      tabs: [
        { label: "AZ", fields },
        { name: "en", label: "EN", description: note, fields: translatable.map(optional) },
        { name: "ru", label: "RU", description: note, fields: translatable.map(optional) },
      ],
    },
  ];
}

// the named fields to translate, looked up through rows so a row's members can be picked too
export function translate(fields: Field[], names: string[]): Field[] {
  const found: Field[] = [];
  const walk = (list: Field[]) =>
    list.forEach((f) => {
      if ("name" in f && names.includes(f.name)) found.push(f);
      else if (f.type === "row") walk(f.fields);
    });
  walk(fields);
  return withTranslations(fields, found);
}
