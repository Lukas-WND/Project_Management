"use client"

import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Panel } from "./components/panel";
import { CreateActivity } from "./components/create-activity";
import { CreateColumn } from "./components/create-column";

import Activity from "@/@types/activity";
import loadData from "./actions";

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
  const [columns, setColumns] = useState([]);
  const [activities, setActivities] = useState({});
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true); // Optional: for loading state
  const [error, setError] = useState(null);     // Optional: for error handling

  const pathname = usePathname();

  const { phase } = await params;
  
  const match = pathname.match(/\/project\/(\d+)\/[^/]+\/.*/);
  let projectId = "";
  if (match && match[1]) {
    projectId = match[1];
  }

  const translation = translate.find((item) => item.key === phase);

  if (!translation) {
    notFound(); // 404 se não encontrar a tradução
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetch
        setError(null);   // Clear previous errors

        const data = await loadData(translation);

        // 3. Update state with the fetched data
        const renderColumns = data.columns.map(column => {
          return (
            <option key={column.id.toString()} value={column.id.toString()}>{column.columnName}</option>
          )
        })

        setColumns(renderColumns);

        const renderUsers = data.users.map(user => {
          return (
            <div>
              <input type="checkbox" id={`user${user.id}`} name="members" value={`${user.id}`} />
              <label htmlFor={`user${user.id}`}>{user.userName}</label><br></br>
            </div>
          );
        });

        setUsers(renderUsers);

        const parsedActivities = data.activities.map(async activity => {
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

        setActivities(resolvedActivities);
      } catch (err) {
        setError(err); // Catch and set any errors
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false); // Set loading to false after fetch (success or failure)
      }
    };

    // 4. Call the async inner function
    fetchData();
  })

  function renderButtons(translation: any) {
    if (loading === false) {
      return (
        <>
          <CreateActivity phase={translation.name} columns={columns} members={users} />
          <CreateColumn phase={translation.name} project={projectId} />
        </>
      )
    }

    return (
      <div>... Carregando ...</div>
    )
  }

  function renderActivities() {
    if (loading === false) {
      return(columns &&
          columns.map((column, idx) => {
            //console.log("Column:", column.id, column.columnName, resolvedActivities.filter(activity => activity.column.id === column.id)); 
            return (
            <Panel key={idx} title={column.columnName} cards={resolvedActivities.filter(activity => activity.column.id === column.id)} columns={renderColumns} />
          )})
    }
  }

  return (
    <section className="h-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl font-semibold">{translation.name}</h1>
      </div>
      <div>
        {renderButtons(translation)}
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 h-7/8">
        {}
      </div>
    </section>
  );
}
