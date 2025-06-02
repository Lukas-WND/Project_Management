import Phase from "@/@types/phase";
import formAction from './form-actions/create-column'
import { Button } from "@/components/ui/button";

export function CreateColumnForm({ phase, project }: { phase: string, project: string }) {
    return (
        <form action={formAction} className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
                <label>Nome da Coluna: </label>
                <input className="p-1 outline rounded-md" id="name" name="name"/>
            </div>

            <Button className="bg-gray-900 text-white font-bold" type="submit">Salvar</Button>
        </form>
    );
}