import Link from "next/link";
import Logo from "./logo";

export default function Navbar({toggleDarkMode}) {
    return (
        <nav className="py-5">
            <div className="container mt-2.5 flex items-center justify-between mx-auto px-4 md:px-24 lg:px-44">
                <Logo className={`h-16 w-16 fill-black dark:fill-white`}/>
                <div className={`flex items-center dark:text-white`}>
                    <ul className="flex pl-4 py-4 space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Projects</Link>
                        </li>
                        <li>
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