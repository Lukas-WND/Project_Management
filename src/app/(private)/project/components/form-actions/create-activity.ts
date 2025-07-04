'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { activities, usersToActivities } from '@/db/schema';
import { users } from '@/db/schema';

const MembersSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
});

const ActivitySchema = z.object({
  title: z.string().min(1),
  status: z.string(),
  deadline: z.string().transform((val) => new Date(val)), // Recebe como string e converte para Date
  members: z.array(z.string()).optional(), // Por enquanto, torne opcional
});

export async function formAction(formData: FormData) {
  const validatedFields = ActivitySchema.safeParse({
    title: formData.get('title'),
    status: formData.get('status'),
    deadline: formData.get('deadline'),
    members: formData.getAll('members'), // Precisará de lógica para parsear se enviar como JSON
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { title, status, deadline, members } = validatedFields.data;

  console.log(members)

  try {
    const [newActivity] = await db.insert(activities).values({
      activityName: title,
      column: parseInt(status),
      deadline: deadline,
      owner: 1, // Defina o owner corretamente
      
    }).returning({ id: activities.id });
    
    for (const member of members || []) {
      await db.insert(usersToActivities).values({
        userId: Number.parseInt(member),
        activityId: newActivity.id
      });
    }

    revalidatePath('/project/initiating');
    return { success: true };
  } catch (e) {
    console.error('Error creating activity:', e);
    return { error: 'Failed to create activity' };
  }
}