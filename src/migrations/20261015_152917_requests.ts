import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_requests_status" AS ENUM('new', 'in-progress', 'done');
  CREATE TABLE "requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seen" boolean DEFAULT false,
  	"status" "enum_requests_status" DEFAULT 'new' NOT NULL,
  	"comment" varchar,
  	"name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"area" numeric,
  	"place" varchar,
  	"services_text" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "requests_id" integer;
  CREATE INDEX "requests_updated_at_idx" ON "requests" USING btree ("updated_at");
  CREATE INDEX "requests_created_at_idx" ON "requests" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_requests_fk" FOREIGN KEY ("requests_id") REFERENCES "public"."requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("requests_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "requests" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "requests" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_requests_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_requests_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "requests_id";
  DROP TYPE "public"."enum_requests_status";`)
}
