import { revalidatePath } from "next/cache";

import { langHome } from "@/i18n/config";

// the home page is static in every language; any edit in the admin rebuilds them on the next visit
export function revalidateHome() {
  try {
    for (const path of Object.values(langHome)) revalidatePath(path);
  } catch {
    // outside a Next request (seed script, migrations) there is nothing to revalidate
  }
}
