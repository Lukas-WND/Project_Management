import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import * as schema from "@/db/schema";
import ProjectItem from "./components/projectItem";

export default async function ProjectListPage() {
    const getProjects = async () => {
        const userWithProjects = await db.query.users.findFirst({
            with: {
                usersToProjects: {
                    with: {
                        project: {
                            with: {
                                owner: true
                            }
                        }
                    },
                }
            },
            where: eq(schema.users.id, 1)
        })

        return userWithProjects?.usersToProjects.map(utp => utp.project);
    }

    const myProjects = await getProjects();

    console.log(myProjects);

    const myProjectsDisplay = myProjects?.map(project => {
        return <ProjectItem 
                key={project.id}
                projectHref={`project/${project.id}`}
                projectName={project.projectName || "undefined"} 
                projectOwner={project.owner?.userName || "undefined"} 
                createdAt={project.createdAt?.toDateString() || "undefined"} 
            />
    });

    return (
        <table>
            <tbody>
                <tr className="bg-accent border-b-2 border-slate-600">
                    <th className="p-2 border-r-2 border-slate-600">NOME</th>
                    <th className="p-2 border-r-2 border-slate-600">AUTOR</th>
                    <th className="p-2">CRIADO EM</th>
                </tr>
                {myProjectsDisplay}
            </tbody>
        </table>
    );
}
