'use server'
import { db } from '@/db/index'
import { usersTable } from '@/db/schema';

export async function formAction(formData: FormData) {
    const name = formData.get('name') as string || 'John Doe';
    const ageString = formData.get('age') as string | null;
    const email = formData.get('email') as string || 'john@example.com';

    const age = ageString ? parseInt(ageString, 10) : 0;

    const user: typeof usersTable.$inferInsert = {
        name: name,
        age: age,
        email: email,
    };

    await db.insert(usersTable).values(user);
    console.log('New user created!');
}