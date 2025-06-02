import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Panel } from "./components/panel";
import { CreateActivity } from "./components/create-activity";

import Activity from "@/@types/activity";

export const translate = [
  { key: "archived", name: "Arquivado" },
  { key: "initiating", name: "Iniciação" },
  { key: "planning", name: "Planejamento" },
  { key: "executing", name: "Execução" },
  { key: "controlling", name: "Monitoramento" },
  { key: "closing", name: "Encerramento" },
] as const;

// Tipa o phase só com os valores válidos da key
export type TranslatePhase = (typeof translate)[number]["key"];

export default async function PhasePage({
  params,
}: {
  params: Promise<{ phase: TranslatePhase }>;
}) {
  const { phase } = await params;

  const translation = translate.find((item) => item.key === phase);

  if (!translation) {
    notFound(); // 404 se não encontrar a tradução
  }

  const columns = await db.query.columns.findMany({
    where: eq(schema.columns.phase, translation.name),
  });

  const renderColumns = columns.map(column => {
    return (
      <option key={column.id.toString()} value={column.id.toString()}>{column.columnName}</option>
    )
  })

  const renderUsers = (await db.select().from(schema.users)).map(user => {
    return (
      <div>
        <input type="checkbox" id={`user${user.id}`} name="members" value={`${user.id}`} />
        <label htmlFor={`user${user.id}`}>{user.userName}</label><br></br>
      </div>
    );
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

  const parsedActivities = activities.map(async activity => {
    const members = activity?.usersToActivities.map(userActivity => {
      return {
        id: userActivity.user.id,
        name: userActivity.user.userName || "",
        email: userActivity.user.email || "",
        role: userActivity.user.role || "",
        avatar: userActivity.user.avatar || ""
      }
    });

    const owner = {
      id: activity.owner?.id || 0,
      name: activity.owner?.userName || "",
      email: activity.owner?.email || "",
      role: activity.owner?.role || "",
      avatar: activity.owner?.avatar || ""
    }
  
    const column = {
      id: activity.column?.id || 0,
      name: activity.column?.columnName || "",
      phase: activity.column?.phase || "",
      project: activity.column?.project?.toString() || ""
    }

    return {
      id: activity.id,
      title: activity.activityName || "Null",
      deadline: activity.deadline || new Date(),
      column: column,
      members: members || [],
      owner: owner,
    }
  });

  const resolvedActivities: Activity[] = await Promise.all(parsedActivities);

  console.log(resolvedActivities);

  return (
    <section className="h-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl font-semibold">{translation.name}</h1>
      </div>
      <div>
        <CreateActivity phase="Iniciação" columns={renderColumns} members={renderUsers} />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 h-7/8">
        {columns &&
          columns.map((column, idx) => {
            //console.log("Column:", column.id, column.columnName, resolvedActivities.filter(activity => activity.column.id === column.id)); 
            return (
            <Panel key={idx} title={column.columnName} cards={resolvedActivities.filter(activity => activity.column.id === column.id)} columns={renderColumns} />
          )})}
      </div>
    </section>
  );
}
