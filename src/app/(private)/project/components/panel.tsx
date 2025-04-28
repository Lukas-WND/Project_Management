import { ActivityCard as AC } from "@/@types/activity-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityCard } from "./activity-card";

export function Panel({ title, cards }: { title: string; cards?: AC[] }) {
  return (
    <ScrollArea>
      <h4 className="text-lg">{title}</h4>
      <div className="flex flex-col mt-8">
        {cards?.map((act, idx) => (
          <ActivityCard key={idx} activity={act} />
        ))}
      </div>
    </ScrollArea>
  );
}
