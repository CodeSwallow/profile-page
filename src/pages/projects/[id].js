import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import Layout from "../../components/layout";

export default function Project({projectData}) {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Project</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section>
                <div className="px-8 mx-auto text-start">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="text-gray-500 text-sm dark:text-gray-300 hover:font-semibold"
                    >
                        Go Back
                    </button>
                    <h1 className="border-t-2 border-black dark:border-white pt-12 mb-8 mt-4 sm:mt-8 text-4xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                        {projectData.name}
                    </h1>
                    <div className="text-justify">
                        <p className="mb-4 font-normal text-gray-500 text-lg dark:text-gray-300">
                            {projectData.description}
                        </p>
                        <div className="flex justify-evenly">
                            <Link href={projectData.url}>
                                <p className="mb-4 font-normal text-gray-500 text-lg dark:text-gray-300">
                                    Website
                                </p>
                            </Link>
                            <Link href={projectData.github[0]}>
                                <p className="mb-4 font-normal text-gray-500 text-lg dark:text-gray-300">
                                    GitHub
                                </p>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Image
                                src={projectData.imageUrl}
                                alt={`Project Image`}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl text-gray-900 dark:text-white mb-1">
                                Features:
                            </h2>
                            <ul className="list-disc ml-8">
                                {projectData.features.map((feature, index) => (
                                    <li key={index}
                                        className="text-gray-500 text-lg dark:text-gray-300">
                                        {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl text-gray-900 dark:text-white mb-1">
                                Technologies Used:
                            </h2>
                            <ul className="list-disc ml-8">
                                {projectData.technologies.map((technology, index) => (
                                    <li key={index}
                                        className="text-gray-500 text-lg dark:text-gray-300">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mb-12 text-lg font-normal text-gray-500 dark:text-gray-300">
                            {projectData.extraDescription}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const {id} = context.query;

    try {
        const response = await fetch(`${process.env.BASE_URL}/projects/${id}`);
        const projectData = await response.json();

        return {
            props: {
                projectData
            }
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            props: {
                projectData: null
            }
        };
    }
}

