import Activity from "@/@types/activity";
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
import { DeleteActivity } from "./delete-activity";
import { UpdateActivity } from "./update-activity";
import { JSX } from "react";

export function ActivityCard({ activity, columns }: { activity: Activity, columns: JSX.Element[] }) {
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
        <DeleteActivity id={activity.id} />
        <UpdateActivity activity={activity} columns={columns} />
      </CardFooter>
    </Card>
  );
}
