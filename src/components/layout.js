import Head from 'next/head';
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function Layout({children}) {
    const [darkMode, setDarkMode] = useState('dark')

    useEffect(() => {
        const item = localStorage.getItem('theme')
        setDarkMode(item)
    }, [])

    function toggleDarkMode() {
        console.log(darkMode)
        if (darkMode === "dark") {
            setDarkMode("light")
            localStorage.setItem("theme", "light")
        } else {
            setDarkMode("dark")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <div className={darkMode === "light" ? "light" : "dark"}>
            <div className="bg-zinc-100 dark:bg-gray-900 min-h-screen min-w-screen">
                <Head>
                    <meta charSet={"utf-8"}/>
                    <meta name="description" content="Isai Ramirez"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <div className="flex flex-col md:flex-row pt-8 md:pt-32 xl:mx-64 lg:mx-32 md:mx-16 mx-8">
                    <div className="ml-8 mr-4">
                        <Navbar toggleDarkMode={toggleDarkMode}/>
                    </div>
                    <div className="mr-4 w-full">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}