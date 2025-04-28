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

export function ActivityCard({ activity }: { activity: AC }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>
          {activity.deadline.toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        {activity.members
          ? activity.members.map((user, idx) => (
              <div key={idx}>
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    user.name[0]
                  </AvatarFallback>
                </Avatar>
              </div>
            ))
          : ""}
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button variant={"destructive"}>Excluir</Button>
        <Button variant={"default"}>Atualizar</Button>
      </CardFooter>
    </Card>
  );
}
