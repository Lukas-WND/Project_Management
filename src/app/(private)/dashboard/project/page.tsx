import PhaseCard from "./components/phase"

export default async function Page() {
    const now = new Date();


    return (
        <div>
            <div className="p-4 grid gap-4 grid-cols-2 border-b-4 mb-8">
                <h1 className="text-3xl"><span className="font-bold">Projeto:</span><span className="ml-8">Smart Parking</span></h1>
                <h2 className="text-xl"><span className="font-bold">Autor:</span><span className="ml-8">Edson Magno</span></h2>
                <h2 className="text-xl">
                    <span className="font-bold">Data de criação:</span>
                    <span className="ml-8">03/02/2025</span>
                </h2>
                {/* Seção fases do projeto */}
            </div>
            <div className="grid gap-4 grid-cols-5 p-4">
                {/* Seção fases do projeto */}
                <PhaseCard phaseName="Iniciação" phaseProgress={100} lastUpdateAuthor="Luiz Oliveira" lastUpdateDatetime={now}/>
                <PhaseCard phaseName="Planejamento" phaseProgress={90} lastUpdateAuthor="Oberdan Angelim" lastUpdateDatetime={now}/>
                <PhaseCard phaseName="Execução" phaseProgress={60} lastUpdateAuthor="Lukas Wendel" lastUpdateDatetime={now}/>
                <PhaseCard phaseName="Monitoramento" phaseProgress={50} lastUpdateAuthor="Edson Magno" lastUpdateDatetime={now}/>
                <PhaseCard phaseName="Encerramento" phaseProgress={10} lastUpdateAuthor="Ayrton Silva" lastUpdateDatetime={now}/>
            </div>
        </div>
        
    )
}