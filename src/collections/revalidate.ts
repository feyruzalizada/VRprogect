import { revalidatePath } from "next/cache";

// the home page is static; any edit in the admin rebuilds it on the next visit
export function revalidateHome() {
  try {
    revalidatePath("/");
  } catch {
    // outside a Next request (seed script, migrations) there is nothing to revalidate
  }
}
