import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { az } from "@payloadcms/translations/languages/az";
import { en } from "@payloadcms/translations/languages/en";
import { ru } from "@payloadcms/translations/languages/ru";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { ServiceFilters } from "./collections/ServiceFilters";
import { Services } from "./collections/Services";
import { Users } from "./collections/Users";
import { ServicesSection } from "./globals/ServicesSection";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  admin: {
    user: Users.slug,
    meta: { titleSuffix: " — VR Global Group" },
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [Services, ServiceFilters, Media, Users],
  globals: [ServicesSection],
  i18n: {
    supportedLanguages: { az, ru, en },
    fallbackLanguage: "az",
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
    push: false,
    migrationDir: path.resolve(dirname, "migrations"),
  }),
  sharp,
  graphQL: { disable: true },
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: { disablePayloadAccessControl: true } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
