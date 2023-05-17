import Link from "next/link";

export default function NavbarDropdownButton({toggleDarkMode}) {
    return (
        <div
            className="visible md:hidden absolute bg-zinc-50 dark:bg-gray-900 mt-2 right-4 z-10 w-44 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className={`dark:text-white`}>
                <ul className="px-4 py-4 space-y-3">
                    <li
                        className={`border-b-2 transition ease-in-out hover:translate-x-2 hover:scale-110`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`border-b-2 transition ease-in-out hover:translate-x-2 hover:scale-110`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li
                        className={`border-b-2 transition ease-in-out hover:translate-x-2 hover:scale-110`}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="pt-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode}/>
                            <div
                                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}