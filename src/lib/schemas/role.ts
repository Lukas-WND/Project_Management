import * as t from "drizzle-orm/pg-core";

export const Role = t.pgTable("role", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity()
    .notNull(),
  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  title: t.varchar("title", { length: 255 }).notNull(),
  description: t.varchar("description", { length: 255 }),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  deleted_at: t.timestamp("deleted_at", { withTimezone: true }),
});
