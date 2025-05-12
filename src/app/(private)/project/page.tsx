import PhaseCard from "./components/phase";

export default async function Page() {
  const now = new Date();
  const route = "project";

  return (
    <div>
      <div className="p-4 grid gap-4 grid-cols-2 border-b-4 mb-8">
        <h1 className="text-3xl font-bold">Nome do Projeto</h1>
        <h2 className="text-xl">
          <span className="font-bold">Autor:</span>
          <span className="ml-8">Marcelo Freitas</span>
        </h2>
        <h2 className="text-xl">
          <span className="font-bold">Data de criação:</span>
          <span className="ml-8">03/02/2025</span>
        </h2>
        {/* Seção fases do projeto */}
      </div>
      <div className="grid gap-4 grid-cols-5 p-8">
        {/* Seção fases do projeto */}
        <PhaseCard
          phaseUrl={`${route}/initiating`}
          phaseName="Iniciação"
          phaseProgress={100}
          lastUpdateAuthor="Luiz"
          lastUpdateDatetime={now}
        />
        <PhaseCard
          phaseUrl={`${route}/planning`}
          phaseName="Planejamento"
          phaseProgress={90}
          lastUpdateAuthor="Luiz"
          lastUpdateDatetime={now}
        />
        <PhaseCard
          phaseUrl={`${route}/executing`}
          phaseName="Execução"
          phaseProgress={60}
          lastUpdateAuthor="Luiz"
          lastUpdateDatetime={now}
        />
        <PhaseCard
          phaseUrl={`${route}/controlling`}
          phaseName="Monitoramento"
          phaseProgress={50}
          lastUpdateAuthor="Luiz"
          lastUpdateDatetime={now}
        />
        <PhaseCard
          phaseUrl={`${route}/closing`}
          phaseName="Encerramento"
          phaseProgress={10}
          lastUpdateAuthor="Luiz"
          lastUpdateDatetime={now}
        />
      </div>
    </div>
  );
}
