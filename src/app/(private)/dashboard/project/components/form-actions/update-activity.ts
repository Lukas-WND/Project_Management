'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { activities } from '@/db/schema';
import { eq } from 'drizzle-orm';

const MembersSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
});

const ActivitySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  status: z.string(),
  deadline: z.string().transform((val) => new Date(val)), // Recebe como string e converte para Date
  members: z.array(MembersSchema).optional(), // Por enquanto, torne opcional
});

export async function formAction(formData: FormData) {
  const validatedFields = ActivitySchema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    status: formData.get('status'),
    deadline: formData.get('deadline'),
    // members: formData.get('members'), // Precisará de lógica para parsear se enviar como JSON
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { id, title, status, deadline } = validatedFields.data;

  try {
    await db.update(activities).set({
      activityName: title,
      column: parseInt(status),
      deadline: deadline,
      owner: 1, // Defina o owner corretamente
    }).where(eq(activities.id, Number.parseInt(id)));
    revalidatePath('/project/initiating');
    return { success: true };
  } catch (e) {
    console.error('Error creating activity:', e);
    return { error: 'Failed to create activity' };
  }
}