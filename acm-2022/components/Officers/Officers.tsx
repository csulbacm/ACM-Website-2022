import React from 'react';
import { Typography } from '@material-tailwind/react';
import OfficerCard from './OfficerCard';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Officers = () => {
    return (
        <div>
            <Typography variant="h1">Officers</Typography>

            <motion.div layout>
                <AnimatePresence>
                    {/* iterate and render all officers with framer motion */}
                    {officers.map((officer) => (
                        <OfficerCard
                            key={officer.name}
                            name={officer.name}
                            image={officer.image}
                            position={officer.position}
                            github={officer.github}
                            linkedin={officer.linkedin}
                            website={officer.website}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const officers = [
    {
        name: 'John Doe',
        image: 'img1.jpg',
        position: 'President',
        github: 'https://github.com/johndoe',
        linkedin: 'https://linkedin.com/johndoe',
        website: 'https://johndoe.com',
    },
    {
        name: 'Jane Doe',
        image: 'img2.jpg',
        position: 'Vice President',
        github: 'https://github.com/janedoe',
        linkedin: 'https://linkedin.com/janedoe',
        website: 'https://janedoe.com',
    },
    {
        name: 'Joe Doe',
        image: 'img3.jpg',
        position: 'Treasurer',
        github: 'https://github.com/joedoe',
        linkedin: 'https://linkedin.com/joedoe',
        website: 'https://joedoe.com',
    },
];

export default Officers;
