import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "news" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "news" ADD COLUMN "en_subtitle" varchar;
  ALTER TABLE "news" ADD COLUMN "ru_subtitle" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_subtitle" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_en_subtitle" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_ru_subtitle" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "news" DROP COLUMN "subtitle";
  ALTER TABLE "news" DROP COLUMN "en_subtitle";
  ALTER TABLE "news" DROP COLUMN "ru_subtitle";
  ALTER TABLE "_news_v" DROP COLUMN "version_subtitle";
  ALTER TABLE "_news_v" DROP COLUMN "version_en_subtitle";
  ALTER TABLE "_news_v" DROP COLUMN "version_ru_subtitle";`)
}
