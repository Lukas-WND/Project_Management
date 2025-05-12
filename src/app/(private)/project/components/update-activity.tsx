import Activity from "@/@types/activity";
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
import { PencilIcon } from "lucide-react";
import { ActivityForm } from "./update-activity-form";
import { JSX } from "react";

export function UpdateActivity({ activity, columns }: { activity: Activity, columns: JSX.Element[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PencilIcon />
          Atualizar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar atividade</DialogTitle>
          <DialogDescription>
            Preencha os dados do formulário para atualizar sua tarefa.
          </DialogDescription>
        </DialogHeader>
        <div>
          <ActivityForm activity={activity} columns={columns} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancelar</Button>
          </DialogClose>
          {/*<Button>Salvar</Button>*/}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
