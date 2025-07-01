import * as t from "drizzle-orm/pg-core";
import { Column } from "./column";

export const Task = t.pgTable("task", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  title: t.varchar("title", { length: 255 }).notNull(),
  description: t.varchar("description", { length: 255 }),
  priority: t.integer("priority").notNull().default(2),
  deadline: t.timestamp("deadline", { withTimezone: true }),
  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  deleted_at: t.timestamp("deleted_at", { withTimezone: true }),
  status: t
    .bigint("status", { mode: "number" })
    .notNull()
    .references(() => Column.id, { onUpdate: "restrict", onDelete: "cascade" }),
});
