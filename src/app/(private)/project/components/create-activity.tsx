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
import { ActivityForm } from "./create-activity-form";
import { JSX } from "react";

export function CreateActivity({ /*project,*/ phase, columns }: { /*project: Project,*/ phase: string, columns: JSX.Element[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Criar Atividade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Atividade</DialogTitle>
          <DialogDescription>
            Preencha os dados do formulário para atualizar sua tarefa.
          </DialogDescription>
        </DialogHeader>
        <div>
          <ActivityForm activity={undefined} columns={columns} />
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