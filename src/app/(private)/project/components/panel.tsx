import AC from "@/@types/activity";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityCard } from "./activity-card";

export function Panel({ title, cards }: { title: string; cards?: AC[] }) {
  return (
    <div className="relative h-full max-h-[calc(100vh-10rem)] bg-slate-100 rounded-lg">
      <h4 className="text-lg font-medium h-8 p-4 mb-8  z-30">
        {title}
      </h4>
      <ScrollArea className="h-11/12 px-4 pb-4 rounded-lg">
        <div className="flex flex-col gap-4">
          {cards?.map((act, idx) => (
            <ActivityCard key={idx} activity={act} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
