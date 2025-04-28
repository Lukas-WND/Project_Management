import { Project } from "./project";
import { User } from "./user";

export type ActivityCard = {
  id: string;
  title: string;
  deadline: Date;
  project: Project;
  members: User[];
};
