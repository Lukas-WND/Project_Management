import ActivityCard from "@/@types/activity";
import { Panel } from "../../components/panel";
import { db } from "@/db/index";
import { activities, columns, users, usersToActivities } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { CreateActivity } from "../../components/create-activity";

export default async function InitializatingProject() {
  async function createActivity() {

  }

  async function loadData() {
    const resultColumns = await db.select().from(columns).where(eq(columns.phase, "Iniciação"));

    const renderPanels = resultColumns.map(async column => {
      const resultActivities = await db.select().from(activities).where(eq(activities.column, column.id));

      const activityList = resultActivities.map(async activity => {
        const userRelations = await db.query.activities.findFirst({
          with: {
            usersToActivities: {
              with: {
                user: true
              }
            }
          },
          where: eq(activities.id, activity.id)
        });

        const members = userRelations?.usersToActivities.map(userActivity => {
          return {
            id: userActivity.user.id.toString(),
            name: userActivity.user.userName || "",
            email: userActivity.user.email || "",
            role: userActivity.user.role || "",
            avatar: userActivity.user.avatar || ""
          }
        });

        const ownerResult = (await db.select().from(users).where(eq(users.id, activity.owner || 0)))[0];

        const owner = {
          id: ownerResult.id.toString(),
          name: ownerResult.userName || "",
          email: ownerResult.email || "",
          role: ownerResult.role || "",
          avatar: ownerResult.avatar || ""
        }

        const columnResult = (await db.select().from(columns).where(eq(columns.id, activity.column || 0)))[0];
      
        const column = {
          id: columnResult.id.toString(),
          title: columnResult.columnName || "",
          phase: columnResult.phase || "",
          project: columnResult.project?.toString() || ""
        }

        return {
          id: activity.id.toString(),
          title: activity.activityName || "Null",
          deadline: activity.deadline || new Date(),
          column: column,
          members: members || [],
          owner: owner,
        }
      });

      const resolvedActivities = await Promise.all(activityList);

      return <Panel title={column.columnName || "Null"} cards={resolvedActivities} />
    })

    return renderPanels;
  }

  const renderPanels = await loadData();

  const renderColumns = (await db.select().from(columns)).map(column => {
      return (
          <option value={column.id.toString()}>{column.columnName}</option>
      )
    });

  return (
    <section className="h-full">
      <h1 className="text-3xl font-semibold">Iniciação</h1>
      <div>
        <CreateActivity phase="Iniciação" columns={renderColumns} />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 h-7/8">
        {renderPanels}
      </div>
    </section>
  );
}
