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
        imageUrl: '/bisect.png',
    },
    {
        id: 2,
        name: 'Your Company name here...',
        description: 'Your description here...',
        website: 'https://csulb.acm.org/',
        imageUrl: '/placeholder.webp',
    },
];
// create a container for to display multiple card componen<imgts
export default function SponsorContainer() {
    return (
        <div className="flex flex-col justify-center items-center sponsorsContainer">
            <Typography variant="h1" color="white" className="mb-2">
                Sponsors
            </Typography>
            <div className="flex flex-wrap justify-center gap-5">
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
        <Card className="md:w-full md:m-15 lg:w-1/3 m-10">
            <CardHeader color="blue" className="relative h-56">
                <a
                    href={props.website}
                    target="blank"
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
