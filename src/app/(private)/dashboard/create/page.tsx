"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Dashboard() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreateProject(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Erro ao criar projeto");
      }

      setTitle("");
      setDescription("");
      router.push('/dashboard/');
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Criar Novo Projeto</CardTitle>
        </CardHeader>
        <form onSubmit={handleCreateProject}>
          <CardContent className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Título</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Nome do projeto"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Descrição</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição do projeto"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </CardContent>
          <CardFooter className="mt-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Criando..." : "Criar Projeto"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
