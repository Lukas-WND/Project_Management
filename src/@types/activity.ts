import { User } from "./user";

type Activity = {
  id: string;
  title: string;
  deadline: Date;
  owner: User;
  members: User[];
};

export default Activity;
