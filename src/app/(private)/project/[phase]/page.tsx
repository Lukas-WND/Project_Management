import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Panel } from "../components/panel";

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

  const activities = await db.query.activities.findMany({
    with: {
      usersToActivities: {
        with: {
          user: true,
        },
      },
    },
    where: eq(schema.activities.column, columns[0].id),
  });

  console.log(activities);

  return (
    <section className="h-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl font-semibold">{translation.name}</h1>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 h-7/8">
        {columns &&
          columns.map((column, idx) => (
            <Panel key={idx} title={column.columnName} />
          ))}
      </div>
    </section>
  );
}
