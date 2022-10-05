import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
} from '@material-tailwind/react';

interface Props {
    eventTitle: string;
    eventDescription: string;
    eventImage: string;
    eventDate: string;
    eventLocation: string;
    eventWebsite: string;
    key: number;
}

export default function EventCard({
    eventTitle,
    eventDescription,
    eventImage,
    eventDate,
    eventLocation,
    eventWebsite,
    key,
}: Props) {
    return (
        <Card className="w-96 !backdrop-blur-md p-2 mx-3">
            <CardHeader floated={false} className="rounded-none">
                <a href={eventWebsite} target="blank" rel="noreferrer">
                    <img
                        src={`/${eventImage}`}
                        alt="profile-picture"
                        height={'350px'}
                        width={'350px'}
                    />
                </a>
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" className="mb-2">
                    <a href={eventWebsite} target="blank" rel="noreferrer">
                        {eventTitle}
                    </a>
                </Typography>
                <Typography color="gray" className="font-medium">
                    {eventDate}
                </Typography>
                {/* bold location */}
                <Typography color="gray" className="font-medium font-bold">
                    {eventLocation}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Typography color="gray" className="font-medium">
                    {eventDescription}
                </Typography>
            </CardFooter>
        </Card>
    );
}
