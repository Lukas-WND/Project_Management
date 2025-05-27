import * as t from "drizzle-orm/pg-core";

export const User = t.pgTable("user", {
  id: t
    .bigint("id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: t.varchar("name", { length: 255 }).notNull(),
  username: t.varchar("username", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull(),
  password: t.varchar("password", { length: 255 }).notNull(),
  avatar_path: t.varchar("avatar_path", { length: 255 }),
  created_at: t
    .timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: t.timestamp("updated_at", { withTimezone: true }),
  deleted_at: t.timestamp("deleted_at", { withTimezone: true }),
});
