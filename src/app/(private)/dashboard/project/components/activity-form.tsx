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

export function ActivityForm({ activity }: { activity?: Activity }) {
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
      members: activity?.members,
      
    },
  });

  return (
    <Form {...form}>
      <form className="grid grid-cols-12 gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel>Nome da Atividade</FormLabel>
              <FormControl>
                <Input placeholder="Levantamento de requisitos..." {...field} />
              </FormControl>
              {/* <FormDescription>
                Este é o título que sua atividade deverá ter
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Backlog">Backlog</SelectItem>
                  <SelectItem value="InProgress">Em Progresso</SelectItem>
                  <SelectItem value="InReview">Em Revisão</SelectItem>
                  <SelectItem value="Done">Concluído</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                Selecione o painel kanban de sua atividade.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Prazo</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
