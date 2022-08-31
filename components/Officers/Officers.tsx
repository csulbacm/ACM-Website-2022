import React from 'react';
import { Typography } from '@material-tailwind/react';
import OfficerCard from './OfficerCard';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Officers = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center officerContainer shadow-2xl">
                <Typography variant="h1">Officers</Typography>
                <br />
                <motion.div
                    layout
                    className="flex flex-wrap justify-center items-center gap-20 "
                >
                    {/* iterate and render all officers with framer motion */}
                    {officers.map((officer) => (
                        <>
                            <OfficerCard
                                key={officer.index}
                                name={officer.name}
                                image={officer.image}
                                position={officer.position}
                                github={officer.github}
                                linkedin={officer.linkedin}
                                website={officer.website}
                            />
                        </>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

const officers = [
    {
        name: 'Rodolfo Sandovol',
        image: 'rudy.jpg',
        position: 'President',
        github: 'https://github.com/RudySPG',
        linkedin: 'https://www.linkedin.com/in/rudyspg',
        website: '',
        index: 0,
    },
    {
        name: 'Brenden Smith',
        image: 'elbee.png',
        position: 'President',
        github: 'https://github.com/Brenden-Smith',
        linkedin: 'https://www.linkedin.com/in/brenden-s-smith/',
        website: 'https://brenden-smith.com/',
        index: 1,
    },
    {
        name: 'Jordan Hilado',
        image: 'jordan.jpg',
        position: 'Vice President',
        github: 'https://github.com/jordanhilado',
        linkedin: 'https://www.linkedin.com/in/jordanhilado/',
        website: 'https://jordanhilado.com/',
        index: 2,
    },
    {
        name: 'Daniel Jo',
        image: 'daniel.jpg',
        position: 'Secretary',
        github: 'https://github.com/danielskjo',
        linkedin: 'https://www.linkedin.com/in/danielskjo/',
        website: 'https://danielskjo.com/',
        index: 3,
    },
    {
        name: 'Chloe Gong',
        image: 'chloe.png',
        position: 'Treasurer',
        github: 'https://github.com/chloeegong',
        linkedin: 'https://www.linkedin.com/in/chloeeg/',
        website: '',
        index: 11,
    },
    {
        name: 'Peter Pham',
        image: 'elbee.png',
        position: 'Recruitment',
        github: 'https://github.com/pmpham',
        linkedin: 'https://www.linkedin.com/in/peterminhpham/',
        website: '',
        index: 4,
    },
    {
        name: 'Ben Kweon',
        image: 'elbee.png',
        position: 'Webmaster',
        github: '',
        linkedin: '',
        website: 'https://github.com/ben9543',
        index: 5,
    },
    {
        name: 'Stephen Lyons',
        image: 'elbee.png',
        position: 'Webmaster',
        github: 'https://github.com/stephenlyons18',
        linkedin: 'https://www.linkedin.com/in/stephen-lyons/',
        website: 'https://stephenlyons.dev',
        index: 6,
    },
    {
        name: 'Lydia Yang',
        image: 'lydia.jpg',
        position: 'AESB Representative',
        github: '',
        linkedin: 'linkedin.com/in/lydia-yang-1028',
        website: '',
        index: 7,
    },
    {
        name: 'Jasmine San Juan',
        image: 'elbee.png',
        position: 'Media Design',
        github: 'https://github.com/anarchopossum',
        linkedin: 'https://www.linkedin.com/in/jasminesj/',
        website: '',
        index: 8,
    },
    {
        name: 'Daniel Hernandez',
        image: 'daniel2.jpg',
        position: 'Media Design',
        github: 'https://github.com/Danny4277',
        linkedin: 'https://www.linkedin.com/in/daniel-hernandez-1a5409238',
        website: '',
        index: 9,
    },
    {
        name: 'Grant Smith',
        image: 'elbee.png',
        position: 'Fundraising',
        github: 'https://github.com/grantsmith01/',
        linkedin: 'https://www.linkedin.com/in/grant-smith-swe/',
        website: '',
        index: 10,
    },
];

export default Officers;
