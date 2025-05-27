import * as t from "drizzle-orm/pg-core";
import { User } from "./user"; // Importa o schema do usuário
import { Task } from "./task"; // Importa o schema da task

export const UserTask = t.pgTable(
  "user_task",
  {
    id_user: t
      .bigint("id_user", { mode: "number" })
      .notNull()
      .references(() => User.id, { onUpdate: "cascade", onDelete: "cascade" }),
    id_task: t
      .bigint("id_task", { mode: "number" })
      .notNull()
      .references(() => Task.id, { onUpdate: "cascade", onDelete: "cascade" }),
  },
  (table) => [t.primaryKey({ columns: [table.id_user, table.id_task] })]
);
