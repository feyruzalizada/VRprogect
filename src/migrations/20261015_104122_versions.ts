import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "_services_v_version_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_title" varchar NOT NULL,
  	"version_description" varchar NOT NULL,
  	"version_note" varchar,
  	"version_cta" varchar NOT NULL,
  	"version_video_id" integer,
  	"version_poster_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_service_filters_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_label" varchar NOT NULL,
  	"version_show_all" boolean DEFAULT false,
  	"version_empty" varchar DEFAULT 'Bu bölmə üzrə xidmətlər tezliklə əlavə olunacaq.',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_service_filters_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "_services_section_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_eyebrow" varchar NOT NULL,
  	"version_heading" varchar NOT NULL,
  	"version_tagline" varchar,
  	"version_intro" varchar,
  	"version_filter_label" varchar,
  	"version_more_label" varchar,
  	"version_less_label" varchar,
  	"version_disclaimer" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "_services_v_version_points" ADD CONSTRAINT "_services_v_version_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_video_id_media_id_fk" FOREIGN KEY ("version_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_poster_id_media_id_fk" FOREIGN KEY ("version_poster_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_service_filters_v" ADD CONSTRAINT "_service_filters_v_parent_id_service_filters_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."service_filters"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_service_filters_v_rels" ADD CONSTRAINT "_service_filters_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_service_filters_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_filters_v_rels" ADD CONSTRAINT "_service_filters_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "_services_v_version_points_order_idx" ON "_services_v_version_points" USING btree ("_order");
  CREATE INDEX "_services_v_version_points_parent_id_idx" ON "_services_v_version_points" USING btree ("_parent_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version__order_idx" ON "_services_v" USING btree ("version__order");
  CREATE INDEX "_services_v_version_version_video_idx" ON "_services_v" USING btree ("version_video_id");
  CREATE INDEX "_services_v_version_version_poster_idx" ON "_services_v" USING btree ("version_poster_id");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_service_filters_v_parent_idx" ON "_service_filters_v" USING btree ("parent_id");
  CREATE INDEX "_service_filters_v_version_version__order_idx" ON "_service_filters_v" USING btree ("version__order");
  CREATE INDEX "_service_filters_v_version_version_updated_at_idx" ON "_service_filters_v" USING btree ("version_updated_at");
  CREATE INDEX "_service_filters_v_version_version_created_at_idx" ON "_service_filters_v" USING btree ("version_created_at");
  CREATE INDEX "_service_filters_v_created_at_idx" ON "_service_filters_v" USING btree ("created_at");
  CREATE INDEX "_service_filters_v_updated_at_idx" ON "_service_filters_v" USING btree ("updated_at");
  CREATE INDEX "_service_filters_v_rels_order_idx" ON "_service_filters_v_rels" USING btree ("order");
  CREATE INDEX "_service_filters_v_rels_parent_idx" ON "_service_filters_v_rels" USING btree ("parent_id");
  CREATE INDEX "_service_filters_v_rels_path_idx" ON "_service_filters_v_rels" USING btree ("path");
  CREATE INDEX "_service_filters_v_rels_services_id_idx" ON "_service_filters_v_rels" USING btree ("services_id");
  CREATE INDEX "_services_section_v_created_at_idx" ON "_services_section_v" USING btree ("created_at");
  CREATE INDEX "_services_section_v_updated_at_idx" ON "_services_section_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "_services_v_version_points" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_service_filters_v" CASCADE;
  DROP TABLE "_service_filters_v_rels" CASCADE;
  DROP TABLE "_services_section_v" CASCADE;`)
}
