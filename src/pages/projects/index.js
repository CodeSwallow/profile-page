import Head from 'next/head'
import Link from "next/link";
import Layout from "../../components/layout";
import ProjectCard from "@/components/projectCard";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section>
                <div className="px-8 mx-auto text-start">
                    <h1 className="border-t-2 border-black dark:border-white pt-12 mb-8 mt-4 sm:mt-8 text-4xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                        Projects
                    </h1>
                    <p className="text-gray-900 dark:text-white mb-8">
                        {`Here are some of the projects I've worked on:`}
                    </p>
                    <ProjectCard title={'Project Title'} description={"Project Placeholder 1"} slug={"/project-placeholder-1"}/>
                    <ul className="flex flex-col py-4 space-y-4 text-black dark:text-white">
                        <li>
                            <Link href={`/projects/project-placeholder-1`}>Project Placeholder 1</Link>
                        </li>
                        <li>
                            <Link href={`/projects/project-placeholder-2`}>Project Placeholder 2</Link>
                        </li>
                        <li>
                            <Link href={`/projects/project-placeholder-3`}>Project Placeholder 3</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}
