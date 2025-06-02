"use server"

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function loadData(translation: any) {
    const columns = await db.query.columns.findMany({
        where: eq(schema.columns.phase, translation.name),
    });

    const activities = await db.query.activities.findMany({
        with: {
          usersToActivities: {
            with: {
              user: true,
            },
          },
          owner: true, // This is now a top-level property in the 'with' object
          column: true
        }
      });

    const users = await db.select().from(schema.users);

    return {columns, activities, users}
}