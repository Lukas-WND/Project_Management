import { ActivityCard as AC } from "@/@types/activity-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PencilIcon, Trash2Icon } from "lucide-react";

export function ActivityCard({ activity }: { activity: AC }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>
          {activity.deadline.toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 w-full">
        {activity.members
          ? activity.members.map((user, idx) => (
              <div key={idx}>
                <Avatar className="h-8 w-8 rounded-full text-sm font-medium">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.name.split(" ").map((word) => word[0])}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))
          : ""}
      </CardContent>
      <CardFooter className="gap-2 justify-between">
        <Button variant={"destructive"}>
          <Trash2Icon /> Excluir
        </Button>
        <Button variant={"default"}>
          <PencilIcon />
          Atualizar
        </Button>
      </CardFooter>
    </Card>
  );
}
