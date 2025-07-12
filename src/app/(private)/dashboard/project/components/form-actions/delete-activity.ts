'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { activities } from '@/db/schema';
import { eq } from 'drizzle-orm';

const ActivitySchema = z.object({
  id: z.string().min(1)
});

export async function formAction(formData: FormData) {
  const validatedFields = ActivitySchema.safeParse({
    id: formData.get('id')
    // members: formData.get('members'), // Precisará de lógica para parsear se enviar como JSON
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { id } = validatedFields.data;

  try {
    await db.delete(activities).where(eq(activities.id, Number.parseInt(id)));
    revalidatePath('/project/initiating');
    return { success: true };
  } catch (e) {
    console.error('Error creating activity:', e);
    return { error: 'Failed to create activity' };
  }
}