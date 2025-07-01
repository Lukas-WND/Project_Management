import * as t from "drizzle-orm/pg-core";
import { User } from "./user";
import { Task } from "./task";

export const Comment = t.pgTable("comment", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity()
    .notNull(),

  text: t.varchar("text", { length: 255 }).notNull(),
  created_at: t.timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  id_user: t
    .bigint("id_user", { mode: "number" })
    .notNull()
    .references(() => User.id, { onUpdate: "cascade", onDelete: "cascade" }),
  id_task: t
    .bigint("id_task", { mode: "number" })
    .notNull()
    .references(() => Task.id, { onUpdate: "cascade", onDelete: "cascade" }),
});
