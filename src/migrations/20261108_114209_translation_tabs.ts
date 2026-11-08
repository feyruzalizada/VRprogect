import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "services_en_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_ru_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "_services_v_version_en_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_ru_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "services" ADD COLUMN "en_title" varchar;
  ALTER TABLE "services" ADD COLUMN "en_description" varchar;
  ALTER TABLE "services" ADD COLUMN "en_note" varchar;
  ALTER TABLE "services" ADD COLUMN "en_cta" varchar;
  ALTER TABLE "services" ADD COLUMN "ru_title" varchar;
  ALTER TABLE "services" ADD COLUMN "ru_description" varchar;
  ALTER TABLE "services" ADD COLUMN "ru_note" varchar;
  ALTER TABLE "services" ADD COLUMN "ru_cta" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_en_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_en_description" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_en_note" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_en_cta" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_ru_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_ru_description" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_ru_note" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_ru_cta" varchar;
  ALTER TABLE "service_filters" ADD COLUMN "en_label" varchar;
  ALTER TABLE "service_filters" ADD COLUMN "en_empty" varchar;
  ALTER TABLE "service_filters" ADD COLUMN "ru_label" varchar;
  ALTER TABLE "service_filters" ADD COLUMN "ru_empty" varchar;
  ALTER TABLE "_service_filters_v" ADD COLUMN "version_en_label" varchar;
  ALTER TABLE "_service_filters_v" ADD COLUMN "version_en_empty" varchar;
  ALTER TABLE "_service_filters_v" ADD COLUMN "version_ru_label" varchar;
  ALTER TABLE "_service_filters_v" ADD COLUMN "version_ru_empty" varchar;
  ALTER TABLE "news" ADD COLUMN "en_title" varchar;
  ALTER TABLE "news" ADD COLUMN "en_text" varchar;
  ALTER TABLE "news" ADD COLUMN "ru_title" varchar;
  ALTER TABLE "news" ADD COLUMN "ru_text" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_en_title" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_en_text" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_ru_title" varchar;
  ALTER TABLE "_news_v" ADD COLUMN "version_ru_text" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_eyebrow" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_heading" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_tagline" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_intro" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_filter_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_more_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_less_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "en_disclaimer" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_eyebrow" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_heading" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_tagline" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_intro" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_filter_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_more_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_less_label" varchar;
  ALTER TABLE "services_section" ADD COLUMN "ru_disclaimer" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_eyebrow" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_heading" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_tagline" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_intro" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_filter_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_more_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_less_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_en_disclaimer" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_eyebrow" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_heading" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_tagline" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_intro" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_filter_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_more_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_less_label" varchar;
  ALTER TABLE "_services_section_v" ADD COLUMN "version_ru_disclaimer" varchar;
  ALTER TABLE "services_en_points" ADD CONSTRAINT "services_en_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_ru_points" ADD CONSTRAINT "services_ru_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_en_points" ADD CONSTRAINT "_services_v_version_en_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_ru_points" ADD CONSTRAINT "_services_v_version_ru_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_en_points_order_idx" ON "services_en_points" USING btree ("_order");
  CREATE INDEX "services_en_points_parent_id_idx" ON "services_en_points" USING btree ("_parent_id");
  CREATE INDEX "services_ru_points_order_idx" ON "services_ru_points" USING btree ("_order");
  CREATE INDEX "services_ru_points_parent_id_idx" ON "services_ru_points" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_en_points_order_idx" ON "_services_v_version_en_points" USING btree ("_order");
  CREATE INDEX "_services_v_version_en_points_parent_id_idx" ON "_services_v_version_en_points" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_ru_points_order_idx" ON "_services_v_version_ru_points" USING btree ("_order");
  CREATE INDEX "_services_v_version_ru_points_parent_id_idx" ON "_services_v_version_ru_points" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_en_points" CASCADE;
  DROP TABLE "services_ru_points" CASCADE;
  DROP TABLE "_services_v_version_en_points" CASCADE;
  DROP TABLE "_services_v_version_ru_points" CASCADE;
  ALTER TABLE "services" DROP COLUMN "en_title";
  ALTER TABLE "services" DROP COLUMN "en_description";
  ALTER TABLE "services" DROP COLUMN "en_note";
  ALTER TABLE "services" DROP COLUMN "en_cta";
  ALTER TABLE "services" DROP COLUMN "ru_title";
  ALTER TABLE "services" DROP COLUMN "ru_description";
  ALTER TABLE "services" DROP COLUMN "ru_note";
  ALTER TABLE "services" DROP COLUMN "ru_cta";
  ALTER TABLE "_services_v" DROP COLUMN "version_en_title";
  ALTER TABLE "_services_v" DROP COLUMN "version_en_description";
  ALTER TABLE "_services_v" DROP COLUMN "version_en_note";
  ALTER TABLE "_services_v" DROP COLUMN "version_en_cta";
  ALTER TABLE "_services_v" DROP COLUMN "version_ru_title";
  ALTER TABLE "_services_v" DROP COLUMN "version_ru_description";
  ALTER TABLE "_services_v" DROP COLUMN "version_ru_note";
  ALTER TABLE "_services_v" DROP COLUMN "version_ru_cta";
  ALTER TABLE "service_filters" DROP COLUMN "en_label";
  ALTER TABLE "service_filters" DROP COLUMN "en_empty";
  ALTER TABLE "service_filters" DROP COLUMN "ru_label";
  ALTER TABLE "service_filters" DROP COLUMN "ru_empty";
  ALTER TABLE "_service_filters_v" DROP COLUMN "version_en_label";
  ALTER TABLE "_service_filters_v" DROP COLUMN "version_en_empty";
  ALTER TABLE "_service_filters_v" DROP COLUMN "version_ru_label";
  ALTER TABLE "_service_filters_v" DROP COLUMN "version_ru_empty";
  ALTER TABLE "news" DROP COLUMN "en_title";
  ALTER TABLE "news" DROP COLUMN "en_text";
  ALTER TABLE "news" DROP COLUMN "ru_title";
  ALTER TABLE "news" DROP COLUMN "ru_text";
  ALTER TABLE "_news_v" DROP COLUMN "version_en_title";
  ALTER TABLE "_news_v" DROP COLUMN "version_en_text";
  ALTER TABLE "_news_v" DROP COLUMN "version_ru_title";
  ALTER TABLE "_news_v" DROP COLUMN "version_ru_text";
  ALTER TABLE "services_section" DROP COLUMN "en_eyebrow";
  ALTER TABLE "services_section" DROP COLUMN "en_heading";
  ALTER TABLE "services_section" DROP COLUMN "en_tagline";
  ALTER TABLE "services_section" DROP COLUMN "en_intro";
  ALTER TABLE "services_section" DROP COLUMN "en_filter_label";
  ALTER TABLE "services_section" DROP COLUMN "en_more_label";
  ALTER TABLE "services_section" DROP COLUMN "en_less_label";
  ALTER TABLE "services_section" DROP COLUMN "en_disclaimer";
  ALTER TABLE "services_section" DROP COLUMN "ru_eyebrow";
  ALTER TABLE "services_section" DROP COLUMN "ru_heading";
  ALTER TABLE "services_section" DROP COLUMN "ru_tagline";
  ALTER TABLE "services_section" DROP COLUMN "ru_intro";
  ALTER TABLE "services_section" DROP COLUMN "ru_filter_label";
  ALTER TABLE "services_section" DROP COLUMN "ru_more_label";
  ALTER TABLE "services_section" DROP COLUMN "ru_less_label";
  ALTER TABLE "services_section" DROP COLUMN "ru_disclaimer";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_eyebrow";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_heading";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_tagline";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_intro";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_filter_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_more_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_less_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_en_disclaimer";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_eyebrow";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_heading";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_tagline";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_intro";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_filter_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_more_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_less_label";
  ALTER TABLE "_services_section_v" DROP COLUMN "version_ru_disclaimer";`)
}
