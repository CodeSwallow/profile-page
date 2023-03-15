import Head from 'next/head'
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <section>
                    <div className="font-serif py-8 px-8 mx-auto max-w-screen-xl text-start md:px-20 lg:py-16 lg:px-24">
                        <h1 className="mb-8 mt-8 sm:mt-12 lg:mt-20 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            {`Hello, I'm Isai Ramirez`}
                        </h1>
                        <div className="lg:mr-32 text-justify">
                            <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                                {`I'm a computer science student with special interest in web development and cloud technologies (AWS).`}
                            </p>
                            <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                                {`I'm always looking for opportunities to expand my knowledge and skill-set. Whether it's learning a new programming language or exploring the latest advancements in cloud computing, I'm always eager to learn and grow as a developer.`}
                            </p>
                        </div>
                        <Link href={"/projects"} className="text-xl dark:text-white hover:font-semibold">
                            <span className="underline underline-offset-4">Projects</span>
                            {` ->`}
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
