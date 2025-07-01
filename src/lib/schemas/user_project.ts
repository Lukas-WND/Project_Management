import * as t from "drizzle-orm/pg-core";
import { User } from "./user";
import { Project } from "./project";
import { Role } from "./role";

export const UserProject = t.pgTable(
  "user_project",
  {
    id_user: t
      .bigint("id_user", { mode: "number" })
      .notNull()
      .references(() => User.id, { onUpdate: "cascade", onDelete: "cascade" }),

    id_project: t
      .bigint("id_project", { mode: "number" })
      .notNull()
      .references(() => Project.id, {
        onUpdate: "cascade",
        onDelete: "cascade",
      }),

    id_role: t
      .bigint("id_role", { mode: "number" })
      .notNull()
      .references(() => Role.id, {
        onUpdate: "restrict",
        onDelete: "restrict",
      }),

    created_at: t
      .timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updated_at: t.timestamp("updated_at", { withTimezone: true }),
    deleted_at: t.timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => [t.primaryKey({ columns: [table.id_user, table.id_project] })]
);
