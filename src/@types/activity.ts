import Column from "./column";
import { User } from "./user";

type Activity = {
  id: number;
  title: string;
  deadline: Date;
  column: Column;
  members: User[];
  owner: User;
};export default Activity;
