import * as t from "drizzle-orm/pg-core";
import { Task } from "./task";

export const TaskHistory = t.pgTable("task_history", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity()
    .notNull(),

  id_task: t
    .bigint("id_task", { mode: "number" })
    .notNull()
    .references(() => Task.id, { onUpdate: "cascade", onDelete: "cascade" }),

  changes: t.json("changes").notNull(),

  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
