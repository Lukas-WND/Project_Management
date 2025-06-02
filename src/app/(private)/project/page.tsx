import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import * as schema from "@/db/schema";

export default async function ProjectListPage() {
    const getProjects = async () => {
        const userWithProjects = await db.query.users.findFirst({
            with: {
                usersToProjects: {
                    with: {
                        project: true
                    },
                }
            },
            where: eq(schema.users.id, 1)
        })

        return userWithProjects?.usersToProjects.map(utp => utp.project);
    }

    const myProjects = await getProjects();

    console.log(myProjects);

    return <></>;
}
