import * as t from "drizzle-orm/pg-core";

export const users = t.pgTable("users", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userName: t.varchar("user_name", { length: 256 }),
  email: t.varchar("user_email", { length: 256 }),
})

export const projects = t.pgTable("projects", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  projectName: t.varchar("user_name", { length: 256 }),
  owner: t.integer("owner_id").references((): t.AnyPgColumn => users.id),
  createdAt: t.timestamp("created_at")
});

export const phasesEnum = t.pgEnum("phases", ["Arquivado", "Iniciação", "Planejamento", "Execução", "Monitoramento", "Encerramento"]);

export const columns = t.pgTable("kanban_columns", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  columnName: t.varchar("user_name", { length: 128 }),
  project: t.integer("project_id").references((): t.AnyPgColumn => projects.id),
  phase: phasesEnum().default("Arquivado")
});

export const activities = t.pgTable("activity_cards", {
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  activityName: t.varchar("activy_name", { length: 128 }),
  column: t.integer("column_id").references((): t.AnyPgColumn => columns.id),
  deadline: t.timestamp("activy_deadline"),
  owner: t.integer("owner_id").references((): t.AnyPgColumn => users.id)
});