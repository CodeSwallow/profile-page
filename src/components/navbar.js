import Link from "next/link";
import Logo from "./logo";

export default function Navbar({toggleDarkMode}) {
    return (
        <nav className="py-2.5">
            <div className="container flex items-center justify-between mx-auto px-24">
                <Logo className={`h-12 w-12 fill-white`}/>
                <div className={`flex items-center dark:text-white`}>
                    <ul className="flex p-4 space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}