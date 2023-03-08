import Link from "next/link";

export default function Navbar({toggleDarkMode}) {
    return (
        <nav className="py-2.5">
            <div className="container flex items-center justify-between mx-auto px-24">
                <div className="flex items-center dark:text-white">
                    <span
                        className="text-xl font-semibold whitespace-nowrap dark:text-white">
                        Code<span className="text-gray-900 dark:text-white">Swallow </span>
                        <span
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Blog
                        </span>
                    </span>
                    <ul className="flex p-4 space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Popular</Link>
                        </li>
                    </ul>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode}/>
                    <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                </label>
            </div>
        </nav>
    );
}