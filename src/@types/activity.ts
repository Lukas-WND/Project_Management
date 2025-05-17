import Column from "./column";
import { User } from "./user";

type Activity = {
  id: string;
  title: string;
  deadline: Date;
  column: Column;
  members: User[];
  owner: User;
};export default Activity;
