import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export default function PhaseCard({
    className,
    phaseProgress,
    phaseName,
    lastUpdateDatetime,
    lastUpdateAuthor,
    ...props
  }: React.ComponentProps<"div"> & { 
        phaseProgress?: number 
        phaseName?: string
        lastUpdateDatetime?: Date
        lastUpdateAuthor?: string
    }) {

    const lastUpdateDatetimeString: string = lastUpdateDatetime?.toDateString() || '<Data indefinida>';

    return (
        <div
          className={cn("p-4 h-64 flex flex-col bg-accent rounded-md hover:animate-pulse hover:outline-2 cursor-pointer", className)}
          {...props}
        >
            <h1 className="text-xl font-bold mb-8">{phaseName}</h1>
            <p className="flex border-b-2"><span className="font-bold">Atualizado em:</span><span className="ml-auto">{lastUpdateDatetimeString}</span></p>
            <p className="flex border-b-2"><span className="font-bold">Por:</span><span className="ml-auto">{lastUpdateAuthor}</span></p>
            <div className="mt-auto">
                <label htmlFor="progress" className="font-bold">{phaseProgress}%</label>
                <Progress color="green-900" id="progress" value={phaseProgress} />
            </div>
        </div>
      )
  }