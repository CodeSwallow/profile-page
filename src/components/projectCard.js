import Link from "next/link";
import TechnologyCard from "@/components/technologyCard";


export default function ProjectCard({project}) {
    return (
        <div className="flex flex-col justify-between p-4 border bg-zinc-50 rounded-lg shadow dark:bg-gray-800">
            <div className="text-black dark:text-white flex justify-between">
                <span className="text-sm font-light">
                    {project.dateStarted}
                </span>
                <div className="flex space-x-1">
                    {project.technologies.map((technology, index) => (
                        <TechnologyCard key={index} technology={technology}/>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-medium text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                    {project.title}
                </h2>
                <p className="mt-2 text-sm text-black dark:text-white">
                    {project.description}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <Link
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-200"
                    href={`/projects/${project.slug}`}>
                        Read more
                </Link>
            </div>
        </div>
    )
}