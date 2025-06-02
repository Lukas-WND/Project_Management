import { User } from "./user";
import { Task } from "./task";
import { UserTask } from "./user_task";
import { Project } from "./project";
import { Column } from "./column";
import { UserProject } from "./user_project";
import { Role } from "./role";
import { Service } from "./service";
import { RoleService } from "./role_service";
import { TaskHistory } from "./task_history";
import { Comment } from "./comment";

export const schema = {
  User,
  Role,
  Service,
  Project,
  Column,
  Task,
  Comment,
  RoleService,
  UserTask,
  UserProject,
  TaskHistory,
};
