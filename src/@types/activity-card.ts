import { Project } from "./project";
import { User } from "./user";

export type ActivityCard = {
  title: string;
  deadline: Date;
  project: Project;
  members: User[];
};
