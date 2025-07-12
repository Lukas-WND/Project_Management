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
import { Trash2Icon } from "lucide-react";
import { formAction } from "./form-actions/delete-activity";

export function DeleteActivity({ id }: { id: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2Icon />
          Excluir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Tem certeza que deseja excluir essa atividade?
          </DialogTitle>
          <DialogDescription>
            Essa ação não poderá ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant={"outline"}>Cancelar</Button>
          </DialogClose>
          <form action={formAction}>
            <input type="hidden" name="id" value={id.toString()}/>
            <Button variant={"destructive"}>Confirmar</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
