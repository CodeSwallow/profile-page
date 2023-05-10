export default function TechnologyCard({technology}) {
    return (
        <div className="text-black dark:text-white text-xs p-1 border bg-zinc-50 rounded-md shadow dark:bg-gray-800">
            <p>
                {technology}
            </p>
        </div>
    )
}