import React from 'react';
import { Typography } from '@material-tailwind/react';
import EventCard from './EventCard';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function EventsContainer() {
    const events = [
        {
            eventTitle: 'Hacktoberfest',
            eventDescription:
                'Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio. Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1 and October 31.',
            eventImage: 'Hacktoberfest_Beach_Flyer.png',
            eventDate: 'October 1st - October 31st',
            eventLocation: 'Online',
            eventWebsite: 'https://csulb.acm.org/hacktoberfest',
            key: 1,
        },
        // {
        //     eventTitle: 'Hack the North',
        //     eventDescription:
        //         'Hack the North is a 36-hour hackathon that brings together 1,000+ students from across North America and beyond to build the next big thing. We provide the space, the mentors, and the resources to help you make your ideas a reality.',
        //     eventImage: 'hackthenorth.png',
        //     eventDate: 'September 17th - September 19th',
        //     eventLocation: 'Online',
        //     eventWebsite: 'https://hackthenorth.com/',
        //     key: 2,
        // },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <Typography variant="h1" className="text-center">
                Events
            </Typography>
            <div className="flex flex-wrap justify-center gap-14 pt-2">
                {events.map((event) => (
                    <EventCard
                        eventTitle={event.eventTitle}
                        eventDescription={event.eventDescription}
                        eventImage={event.eventImage}
                        eventDate={event.eventDate}
                        eventLocation={event.eventLocation}
                        eventWebsite={event.eventWebsite}
                        key={event.key}
                    />
                ))}
            </div>
        </div>
    );
}
