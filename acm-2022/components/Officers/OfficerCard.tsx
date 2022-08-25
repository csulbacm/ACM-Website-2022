import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from '@material-tailwind/react';
// recieves props from the parent component of: Name, Email, Image URL, Position, Github, LinkedIn, Website URL
interface Props {
    name: string;

    image: string;
    position: string;
    github: string;
    linkedin: string;
    website: string;
}
// OfficerCard is a component that displays the information of an officer
export default function OfficerCard({
    name,
    
    image,
    position,
    github,
    linkedin,
    website,
}: Props) {
    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img
                    src={'public/officers' + { image }}
                    alt="profile-picture"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    {position}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href={github}
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-github" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Like">
                    <Typography
                        as="a"
                        href={linkedin}
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-linkedin" />
                    </Typography>
                </Tooltip>

                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}
