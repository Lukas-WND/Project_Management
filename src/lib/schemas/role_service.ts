import * as t from "drizzle-orm/pg-core";
import { Role } from "./role";
import { Service } from "./service";

export const RoleService = t.pgTable(
  "role_service",
  {
    id_role: t
      .bigint("id_role", { mode: "number" })
      .notNull()
      .references(() => Role.id, {
        onUpdate: "restrict",
        onDelete: "restrict",
      }),

    id_service: t
      .bigint("id_service", { mode: "number" })
      .notNull()
      .references(() => Service.id, {
        onUpdate: "cascade",
        onDelete: "cascade",
      }),
  },
  (table) => [t.primaryKey({ columns: [table.id_role, table.id_service] })]
);
