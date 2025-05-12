import { User } from "./user";

export type Project = {
    id: string;
    name: string;
    description?: string;
    deadline: Date;
    members: User[],
}; export default Project;