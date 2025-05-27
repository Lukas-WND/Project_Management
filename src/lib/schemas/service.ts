import * as t from "drizzle-orm/pg-core";

export const Service = t.pgTable("service", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity()
    .notNull(),

  title: t.varchar("title", { length: 255 }).notNull(),
  description: t.varchar("description", { length: 255 }),
  path: t.varchar("path", { length: 255 }).notNull(),
  method: t.integer("method").notNull(),

  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
});
