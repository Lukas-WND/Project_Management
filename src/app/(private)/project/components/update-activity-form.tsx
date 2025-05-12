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
import { formAction } from "./form-actions/update-activity";
import { act, useEffect } from "react";

import { db } from "@/db";
import { columns } from "@/db/schema";
import { JSX } from "react/jsx-runtime";

export function ActivityForm({ activity, columns }: { activity?: Activity, columns: JSX.Element[] }) {
  function onChange() {

  }

  return (
    <form action={formAction} className="grid grid-cols-4 gap-4">
      <input type="hidden" id="id" name="id" value={activity?.id} />

      <div className="col-span-4">
          <label>Nome da Atividade: </label>
          <input className="p-1 outline rounded-md" id="title" name="title" onChange={onChange} defaultValue={activity?.title}/>
      </div>

      <div className="col-span-2">
          <label htmlFor="column">Status da Atividade</label>
          <select id="column" name="status">
              {columns}
          </select>
      </div>

      <div className="col-span-2">
          <label htmlFor="deadline">Data Limite</label>
          <input type="date" name="deadline" id="deadline" defaultValue={activity?.deadline.toISOString().split("T")[0]}/>
      </div>

      <Button className="bg-gray-900 text-white font-bold" type="submit">Salvar</Button>
    </form>
  );
}