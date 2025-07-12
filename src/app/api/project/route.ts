import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const projects = await prisma.project.findMany({
    where: { clerkUserId: userId },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { title, description } = body;

  const newProject = await prisma.project.create({
    data: {
      title,
      description,
      clerkUserId: userId,
    },
  });

  return NextResponse.json(newProject);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const projectId = parseInt(params.id);

  if (isNaN(projectId)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  // Verifica se o projeto pertence ao usuário
  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project || project.clerkUserId !== userId) {
    return NextResponse.json({ error: 'Projeto não encontrado ou sem permissão' }, { status: 404 });
  }

  await prisma.project.delete({
    where: { id: projectId },
  });

  return NextResponse.json({ message: 'Projeto excluído com sucesso' });
}