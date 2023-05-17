import Link from "next/link";
import {useEffect, useState} from "react";
import TechnologyCard from "@/components/technologyCard";


export default function ProjectCard({project, index}) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const date = new Date(project.timeline.startDate);

        const month = date.toLocaleString('default', {month: 'long'});
        const year = date.getFullYear();

        const formattedString = `${month} ${year}`;
        setFormattedDate(formattedString);
    }, []);

    const animationClassDelay = {
        0: 'animate-[right-to-left_0.5s_ease-in-out]',
        1: 'animate-[right-to-left_0.7s_ease-in-out]',
        2: 'animate-[right-to-left_0.9s_ease-in-out]',
        3: 'animate-[right-to-left_1.1s_ease-in-out]',
        4: 'animate-[right-to-left_1.3s_ease-in-out]'
    }

    return (
        <div
            className={`${animationClassDelay[index]} flex flex-col justify-between p-4 bg-zinc-50 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow hover:shadow-lg dark:bg-gray-800`}>
            <div className="text-black dark:text-white flex justify-between mb-2">
                <span className="text-sm font-light">
                    {formattedDate}
                </span>
                <div className="flex">
                    {project.technologies.map((technology, index) => (
                        <TechnologyCard key={index} technology={technology}/>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-medium text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                    {project.name}
                </h2>
                <p className="mt-2 text-sm text-black dark:text-white">
                    {project.description}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <Link
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-200"
                    href={`/projects/${project.sk}`}>
                    Read more
                </Link>
            </div>
        </div>
    )
}