import EmailIcon from "@/components/emailIcon";
import GitHubIcon from "@/components/githubIcon";

export default function ContactCard({contact}) {
    const contactType = {
        'Email': <EmailIcon/>,
        'GitHub': <GitHubIcon/>,
    }

    return (
        <div className="animate-clear-up flex justify-center w-full sm:w-52 mb-8 p-4 py-8 border bg-zinc-50 rounded-lg shadow dark:bg-gray-800">
            <a href={contact.url}>
                <div className="animate-pulse text-black dark:text-white flex flex-col justify-center items-center">
                    <div>
                        {contactType[contact.type]}
                    </div>
                    <span className="font-medium mt-2">
                        {contact.value}
                    </span>
                </div>
            </a>
        </div>
    )
}