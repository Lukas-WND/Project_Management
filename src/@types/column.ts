import Activity from "./activity";
import Phase from "./phase";
import { Project } from "./project";

type Column = {
  id: number;
  name: string;
  //order: number;
  phase: string;
  project: string;
  //activities: Activity[];
};

export default Column;
