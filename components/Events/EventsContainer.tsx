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
        {
            eventTitle: 'GBM #2: Python Party',
            eventDescription:
                'Have you ever wanted to learn how to program? Join us at our Python Party!',
            eventImage: 'gbm2.jpg',
            eventDate: 'October 20th, 2022',
            eventLocation: 'CSULB VEC 115',
            eventWebsite: 'https://csulb.acm.org/',
            key: 2,
        },
        {
            eventTitle: 'GBM #3: Web 3 Workshop',
            eventDescription:
                'Build Scalable Web Applications on Hedera by Abi Castro',
            eventImage: 'gbm3.jpg',
            eventDate: 'November 15th, 2022',
            eventLocation: 'CSULB HSD-111',
            eventWebsite: 'https://forms.gle/oGBHw31PqJkgdpd28',
            key: 3,
        },
        {
            eventTitle: 'Fall Smash Tournament',
            eventDescription:
                'Join us for our Fall Smash Tournament! Amazon gift cards will be awarded to the top 3 placements. To compete, you must register before the tournament date. Please bring your own controller. Gamecube adapters will be available on-site.',
            eventImage: 'smash.png',
            eventDate: 'November 17th, 2022',
            eventLocation: 'ACM Office (EN3-118)',
            eventWebsite: 'https://forms.gle/XWQHhF8Zf44jMY9E6',
            key: 4,
        },
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
