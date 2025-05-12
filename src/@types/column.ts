import Activity from "./activity";
import Phase from "./phase";
import { Project } from "./project";

type Column = {
  id: string;
  name: string;
  order: number;
  phase: Phase;
  project: Project;
  activities: Activity[];
};

export default Column;
