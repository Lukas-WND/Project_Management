"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import PhaseCard from "./components/phase";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";

function SortableColumn({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default function Page() {
  const route = "project";
  const [now, setNow] = useState<Date | null>(null);
  const [generated, setGenerated] = useState(false);
  const [columns, setColumns] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kanban_columns");
      if (saved) return JSON.parse(saved);
    }
    return [
      { id: "1", name: "Iniciação", url: "initiating", progress: 100 },
      { id: "2", name: "Planejamento", url: "planning", progress: 90 },
      { id: "3", name: "Execução", url: "executing", progress: 60 },
      { id: "4", name: "Monitoramento", url: "controlling", progress: 50 },
      { id: "5", name: "Encerramento", url: "closing", progress: 10 },
    ];
  });
  const [newPhaseName, setNewPhaseName] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban_columns", JSON.stringify(columns));
  }, [columns]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumns((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddColumn = () => {
    if (!newPhaseName.trim()) return;
    const id = uuidv4();
    setColumns((prev) => [
      ...prev,
      { id, name: newPhaseName, url: newPhaseName.toLowerCase().replace(/\s+/g, "-"), progress: 0 }
    ]);
    setNewPhaseName("");
    setShowInput(false);
  };

  const docTitles = [
    "Plano de Gerenciamento do Projeto",
    "Declaração do Escopo do Projeto",
    "Matriz de Responsabilidades",
    "Plano de Comunicação",
    "Plano de Gerenciamento de Riscos",
  ];

  const generateExcelFiles = () => {
    docTitles.forEach((title) => {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([
        [title],
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
      ]);
      XLSX.utils.book_append_sheet(wb, ws, "Introducao");

      const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const fileName = title.replace(/\s+/g, "_").normalize("NFD").replace(/[^\w.]/gi, "") + ".xlsx";
      saveAs(new Blob([wbout], { type: "application/octet-stream" }), fileName);
    });

    setGenerated(true);
  };

  return (
    <div>
      <div className="p-4 grid gap-4 grid-cols-2 border-b-4 mb-8">
        <h1 className="text-3xl font-bold">Nome do Projeto</h1>
        <h2 className="text-xl">
          <span className="font-bold">Autor:</span>
          <span className="ml-8">Marcelo Freitas</span>
        </h2>
        <h2 className="text-xl">
          <span className="font-bold">Data de criação:</span>
          <span className="ml-8">03/02/2025</span>
        </h2>
        <div className="flex flex-col gap-4">
          <Button onClick={generateExcelFiles}>Gerar Documentos</Button>
          {!showInput && <Button onClick={() => setShowInput(true)} variant="outline">Adicionar Fase</Button>}
          {showInput && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newPhaseName}
                onChange={(e) => setNewPhaseName(e.target.value)}
                placeholder="Nome da nova fase"
                className="border px-2 py-1 rounded"
              />
              <Button onClick={handleAddColumn}>Criar</Button>
              <Button onClick={() => setShowInput(false)} variant="ghost">Cancelar</Button>
            </div>
          )}
        </div>
      </div>

      {now && (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={columns.map(c => c.id)} strategy={verticalListSortingStrategy}>
            <div className="flex flex-wrap gap-4 p-8">
              {columns.map((col) => (
                <SortableColumn key={col.id} id={col.id}>
                  <PhaseCard
                    phaseUrl={`${route}/${col.url}`}
                    phaseName={col.name}
                    phaseProgress={col.progress}
                    lastUpdateAuthor="Luiz"
                    lastUpdateDatetime={now}
                  />
                </SortableColumn>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}