import { Project } from "./project";
import { User } from "./user";

type Activity = {
  id: string;
  title: string;
  deadline: Date;
  //project: Project;
  members: User[];
  owner: User;
};export default Activity;

