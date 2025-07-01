import * as t from "drizzle-orm/pg-core";
import { Project } from "./project"; // Importa o schema do projeto (se necessário para FK)

export const Column = t.pgTable("column", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  title: t.varchar("title", { length: 255 }).notNull(),
  order: t.integer("order"),
  phase: t.integer("phase").notNull(),
  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  id_project: t
    .bigint("id_project", { mode: "number" })
    .references(() => Project.id, { onUpdate: "cascade", onDelete: "cascade" }),
});
