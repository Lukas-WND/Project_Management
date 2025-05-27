import * as t from "drizzle-orm/pg-core";

export const Project = t.pgTable("project", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  title: t.varchar("title", { length: 255 }).notNull(),
  description: t.varchar("description", { length: 255 }),
  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  deleted_at: t.timestamp("deleted_at", { withTimezone: true }),
});
