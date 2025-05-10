import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const testTable = pgTable("classes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  classe: varchar({ length: 255 }).notNull(),
});