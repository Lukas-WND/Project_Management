import AC from "@/@types/activity";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityCard } from "./activity-card";
import { JSX } from "react";

export function Panel({ title, cards, columns }: { title: string; cards?: AC[], columns: JSX.Element[] }) {
  return (
    <div className="relative h-full max-h-[calc(100vh-10rem)] bg-accent rounded-lg">
      <h4 className="text-lg font-medium h-8 p-4 mb-8  z-30">
        {title}
      </h4>
      <ScrollArea className="h-11/12 px-4 pb-4 rounded-lg">
        <div className="flex flex-col gap-4">
          {cards?.map((act, idx) => (
            <ActivityCard key={idx} activity={act} columns={columns} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
