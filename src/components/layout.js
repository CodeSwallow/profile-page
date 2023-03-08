import Head from 'next/head';
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";

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
        <div className={darkMode === "dark" ? "dark" : "light"}>
            <div className="bg-zinc-100 dark:bg-gray-900 min-h-screen min-w-screen">
                <Head>
                    <meta charSet={"utf-8"}/>
                    <meta name="description" content="CodeSwallow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Navbar toggleDarkMode={toggleDarkMode}/>
                <main>{children}</main>
            </div>
        </div>
    );
}