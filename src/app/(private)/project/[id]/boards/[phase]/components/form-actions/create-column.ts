'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { activities, usersToActivities } from '@/db/schema';
import { users } from '@/db/schema';

const ActivitySchema = z.object({
  name: z.string().min(1),
});

export async function formAction(formData: FormData) {
  const validatedFields = ActivitySchema.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name } = validatedFields.data;

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