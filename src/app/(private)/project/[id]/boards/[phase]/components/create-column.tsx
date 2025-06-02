import Project from "@/@types/project";
import Activity from "@/@types/activity";
import { User } from "@/@types/user";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { CreateColumnForm } from "./create-column-form";
import Phase from "@/@types/phase";

export function CreateColumn({ /*project,*/ phase, project }: { /*project: Project,*/ phase: string, project: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Criar Coluna
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Coluna</DialogTitle>
          <DialogDescription>
            Dê um nome à nova coluna.
          </DialogDescription>
        </DialogHeader>
        <div>
          <CreateColumnForm phase={phase} project={project} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}