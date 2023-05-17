import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import NavbarDropdownButton from "@/components/navbarDropdownButton";

export default function Navbar({toggleDarkMode}) {
    const [dropdownToggled, setDropdownToggled] = useState(false);

    const toggleDropdown = () => {
        setDropdownToggled(!dropdownToggled)
    }

    return (
        <nav className="py-5 sticky top-4">
            <div className="md:hidden flex justify-between items-center px-4">
                <Logo className={`h-12 w-12 fill-black dark:fill-white`}/>
                <div>
                    <button type="button"
                            onClick={toggleDropdown}
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                    {dropdownToggled && <NavbarDropdownButton toggleDarkMode={toggleDarkMode}/>}
                </div>
            </div>
            <div className="hidden md:block mt-2.5 mx-auto px-4">
                <Logo className={`h-16 w-16 fill-black dark:fill-white`}/>
                <div className={`dark:text-white`}>
                    <ul className="pl-2 py-4 space-y-2">
                        <li
                            className={`transition ease-in-out hover:translate-x-1 hover:scale-110`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={`transition ease-in-out hover:translate-x-1 hover:scale-110`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li
                            className={`transition ease-in-out hover:translate-x-1 hover:scale-110`}>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="pt-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode}/>
                                <div
                                    className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}