import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
} from '@material-tailwind/react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import { GitHub } from '@mui/icons-material';
import Image from 'next/image';
// recieves props from the parent component of: Name, Email, Image URL, Position, Github, LinkedIn, Website URL
interface Props {
    name: string;
    image: string;
    position: string;
    github: string;
    linkedin: string;
    website: string;
    key: number;
}
// OfficerCard is a component that displays the information of an officer
export default function OfficerCard({
    name,
    image,
    position,
    github,
    linkedin,
    website,
    key,
}: Props) {
    return (
        <Card className="w-80">
            <CardHeader floated={false} className="">
                <Image
                    src={'public/officers/' + { image }}
                    alt="profile-picture"
                    height={'200px'}
                    width={'200px'}
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    <a href={website} target="blank" rel="noreferrer">
                        {name}
                    </a>
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    {position}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <IconButton color="blue-gray">
                    <a href={github} target="blank" rel="noopener noreferrer">
                        <GitHub />
                    </a>
                </IconButton>
                <IconButton>
                    <a href={linkedin} target="blank" rel="noopener noreferrer">
                        <LinkedinIcon />
                    </a>
                </IconButton>
                <IconButton color="teal">
                    <a href={website} target="blank" rel="noopener noreferrer">
                        <TerminalIcon />
                    </a>
                </IconButton>
            </CardFooter>
        </Card>
    );
}
