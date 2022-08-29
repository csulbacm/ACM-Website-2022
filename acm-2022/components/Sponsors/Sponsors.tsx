import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from '@material-tailwind/react';

const sponsors = [
    {
        id: 1,
        name: 'Bisect Hosting',
        description:
            'Bisect Hosting is a hosting company that offers affordable and reliable hosting services for your website.',
        website: 'https://bisecthosting.com/',
        imageUrl: '/public/images/sponsors/bisect.png',
    },
    {
        id: 2,
        name: 'Your Company name here...',
        description: 'Your description here...',
        website: 'https://yourcompany.com/',
        imageUrl: '/public/img/sponsors/your-company.png',
    },
];
// create a container for to display multiple card components
export default function SponsorContainer() {
    return (
        <div className="flex flex-wrap justify-center">
            {sponsors.map((sponsor) => (
                <CardComponent
                    key={sponsor.id}
                    id={sponsor.id}
                    name={sponsor.name}
                    description={sponsor.description}
                    website={sponsor.website}
                    imageUrl={sponsor.imageUrl}
                />
            ))}
        </div>
    );
}

function CardComponent(props: {
    id: number;
    name: string;
    description: string;
    website: string;
    imageUrl: string;
}) {
    return (
        <Card className="w-20">
            <CardHeader color="blue" className="relative h-56">
                <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={props.imageUrl}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </a>
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {props.name}
                </Typography>
                <Typography>{props.description}</Typography>
            </CardBody>
        </Card>
    );
}
