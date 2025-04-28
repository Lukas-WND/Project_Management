import { Panel } from "../../components/panel";


export default function InitializatingProject() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Iniciação</h1>
      <div className="mt-10 grid grid-cols-4 gap-10">
        <Panel title="Backlog"/>
        <Panel title="Em andamento" />
        <Panel title="Em análise" />
        <Panel title="Concluído" />
      </div>
    </section>
  );
}
