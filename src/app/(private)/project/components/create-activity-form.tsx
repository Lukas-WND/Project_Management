"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Activity from "@/@types/activity";
import { User } from "@/@types/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formAction } from "./form-actions/create-activity";
import { useEffect } from "react";

import { JSX } from "react/jsx-runtime";

export function ActivityForm({ activity, columns, members }: { activity?: Activity, columns: JSX.Element[], members: JSX.Element[] }) {
  const MembersSchema = z.object({
    id: z.string().min(1, { message: "Informe o ID do usuário" }),
    name: z.string(),
    email: z.string().email(),
    role: z.string(),
  });

  const ActivitySchema = z.object({
    title: z.string().min(1, { message: "O nome da atividade é obrigatório." }),
    status: z.string({ required_error: "Informe o status da atividade" }),
    deadline: z.date({
      required_error: "Informe a data limite para a conclusão.",
      invalid_type_error: "Informe uma data válida.",
    }),
    members: z
      .array(MembersSchema)
      .nonempty({ message: "Atribua essa tarefa à algum membro da equipe." }),
  });

  type activityDTO = z.infer<typeof ActivitySchema>;

  const form = useForm<activityDTO>({
    resolver: zodResolver(ActivitySchema),
    defaultValues: {
      title: activity?.title,
      deadline: activity?.deadline,
      members: activity?.members
    },
  });

  // Log dos valores do formulário para depuração
  useEffect(() => {
    const subscription = form.watch((values) => console.log("Form values:", values));
    return () => subscription.unsubscribe();
  }, [form.watch]);

  

  return (
    <Form {...form}>
      <form action={formAction} className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
            <label>Nome da Atividade: </label>
            <input className="p-1 outline rounded-md" id="title" name="title"/>
        </div>

        <div className="col-span-2">
            <label htmlFor="column">Status da Atividade</label>
            <select id="column" name="status">
                {columns}
            </select>
        </div>

        <div className="col-span-2">
            <label htmlFor="deadline">Data Limite</label>
            <input type="date" name="deadline" id="deadline" />
        </div>

        <div className="col-span-4">
            <label htmlFor="members">Responsáveis</label>
            <div className="overflow-scroll grid grid-cols-2 max-h-32" id="members">
              {members}
            </div>
        </div>

        <Button className="bg-gray-900 text-white font-bold" type="submit">Salvar</Button>
      </form>
    </Form>
  );
}