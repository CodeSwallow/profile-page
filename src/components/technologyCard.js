export default function TechnologyCard({technology}) {
    const technologyColors = {
        'React': 'bg-react',
        'Next.js': 'bg-nextjs',
        'Node.js': 'bg-nodejs',
        'Express': 'bg-express',
        'MongoDB': 'bg-mongodb',
        'Python': 'bg-python',
        'Django': 'bg-django',
        'PostgreSQL': 'bg-postgresql',
        'JavaScript': 'bg-javascript',
        'TypeScript': 'bg-typescript',
        'HTML': 'bg-html',
        'CSS': 'bg-css',
        'Tailwind CSS': 'bg-tailwindcss',
        'Bootstrap': 'bg-bootstrap',
        'Git': 'bg-git',
        'GitHub': 'bg-github',
        'Netlify': 'bg-netlify',
        'Vercel': 'bg-vercel',
        'Firebase': 'bg-firebase',
        'Figma': 'bg-figma',
        'AWS': 'bg-aws',
        'AWS Serverless': 'bg-aws',
        'AWS Amplify': 'bg-aws',
        'AWS Lambda': 'bg-aws',
        'AWS DynamoDB': 'bg-aws',
        'AWS RDS': 'bg-aws',
        'AWS Beanstalk': 'bg-aws',
        'Amazon S3': 'bg-aws'
    }

    return (
        <div className={`text-white text-xs p-1 ml-1 ${technologyColors[technology]} transition ease-in-out hover:-translate-y-1 hover:scale-110 rounded-md shadow-lg`}>
            <p>
                {technology}
            </p>
        </div>
    )
}