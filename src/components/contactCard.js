export default function ContactCard({contact}) {
    return (
        <div className="flex flex-col justify-between p-4 border bg-zinc-50 rounded-lg shadow dark:bg-gray-800">
            <div className="text-black dark:text-white flex justify-between">
                <span className="text-sm font-light">
                    {contact.info}
                </span>
            </div>
        </div>
    )
}