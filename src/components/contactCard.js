export default function ContactCard({contact}) {
    return (
        <div className="flex-1 p-4 border bg-zinc-50 rounded-lg shadow dark:bg-gray-800">
            <div className="text-black dark:text-white flex flex-col justify-center items-center">
                <div>
                    {contact.icon}
                </div>
                <span className="font-light">
                    {contact.value}
                </span>
                <span className="font-light">
                    {contact.name}
                </span>
            </div>
        </div>
    )
}