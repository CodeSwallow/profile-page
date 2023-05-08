import Head from 'next/head'
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
    let bodyText = {
        "title": "Hello, I'm Isai Ramirez",
        "underTitle": "I'm a computer science student with special interest in web development and cloud technologies (AWS).",
        "body": "I'm always looking for opportunities to expand my knowledge and skill-set. Whether it's learning a new programming language or exploring the latest advancements in cloud computing, I'm always eager to learn and grow as a developer."
    }

    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section>
                <div className="font-serif px-8 mx-auto text-start">
                    <h1 className="border-t-2 border-black dark:border-white pt-12 mb-8 mt-4 sm:mt-8 text-4xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                        {bodyText.title}
                    </h1>
                    <div className="text-justify">
                        <p className="mb-4 font-normal text-gray-500 text-lg dark:text-gray-300">
                            {bodyText.underTitle}
                        </p>
                        <p className="mb-12 text-lg font-normal text-gray-500 dark:text-gray-300">
                            {bodyText.body}
                        </p>
                    </div>
                    <Link href={"/projects"} className="text-xl dark:text-white hover:font-semibold">
                        <span className="underline underline-offset-4">Projects</span>
                        {` ->`}
                    </Link>
                </div>
            </section>
        </Layout>
    )
}
