import Link from "next/link";
import Logo from "./logo";

export default function Navbar({toggleDarkMode}) {
    return (
        <nav className="py-5">
            <div className="container mt-2.5 mx-auto px-4">
                <Logo className={`h-16 w-16 fill-black dark:fill-white`}/>
                <div className={`dark:text-white`}>
                    <ul className="pl-2 py-4 space-y-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
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
        </nav>
    );
}