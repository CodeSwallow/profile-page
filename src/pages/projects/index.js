import Head from 'next/head';
import Layout from "@/components/layout";
import ProjectCard from "@/components/projectCard";
import {getOrderedProjects} from "@/pages/api/projects";

export default function Projects({projects}) {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section>
                <div className="px-8 mx-auto text-start pb-4">
                    <h1 className="border-t-2 border-black dark:border-white pt-12 mb-8 mt-4 sm:mt-8 text-4xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                        Projects
                    </h1>
                    <p className="text-gray-900 dark:text-white mb-8">
                        {`Here are some of the projects I've worked on:`}
                    </p>
                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        // const response = await fetch(`${process.env.BASE_URL}/projects`);
        // const data = await response.json();

        const data = await getOrderedProjects();

        return {
            props: {
                projects: data,
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            props: {
                projects: [],
            },
        };
    }
}
