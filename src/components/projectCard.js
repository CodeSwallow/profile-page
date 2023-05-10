import Link from "next/link";


export default function ProjectCard({title, description, slug}) {
    return (
        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <Link href={`/projects/${slug}`}>
                        Read more
                </Link>
            </div>
        </div>
    )
}