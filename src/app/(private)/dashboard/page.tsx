"use client";
import { useOrganizationList } from "@clerk/nextjs";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string | null;
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const router = useRouter();
  const { createOrganization, setActive } = useOrganizationList();

  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setError("Erro ao carregar projetos"));
  }, []);

  async function handleDelete(id: number) {
    setLoadingId(id);
    try {
      const res = await fetch(`/api/project/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Erro ao excluir projeto");
      }

      setProjects((prev) => prev.filter((proj) => proj.id !== id));
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoadingId(null);
    }
  }

  const handleClick = async () => {
    const novaOrg = await createOrganization({
    name: "Minha Organização"
  });

  return (
    <div className="flex flex-col items-center min-h-screen p-4 space-y-10">
      {/* Botão para criar novo projeto */}
      <div className="w-full max-w-4xl flex justify-end">
         <Button className="mr-4" onClick={() => }>
          Criar Organização
        </Button>
        <Button onClick={() => router.push("/dashboard/create")}>
          Criar Projeto
        </Button>
      </div>

      {/* Lista de projetos */}
      <div className="w-full max-w-4xl grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="relative">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {project.description || "Sem descrição"}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="destructive"
                onClick={() => handleDelete(project.id)}
                disabled={loadingId === project.id}
              >
                {loadingId === project.id ? "Excluindo..." : "Excluir"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
