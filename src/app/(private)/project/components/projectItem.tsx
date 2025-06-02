'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function ProjectItem({projectHref, projectName, projectOwner, createdAt}: 
    {projectHref: string, projectName: string, projectOwner: string, createdAt: string}) {
        const router = useRouter();

        function redirect() {
            router.push(projectHref);
        }

        return (
            <tr className="bg-card cursor-pointer" onClick={redirect}>
                <td className="p-2">{projectName}</td>
                <td className="p-2">{projectOwner}</td>
                <td className="p-2">{createdAt}</td>
            </tr>
        );
}