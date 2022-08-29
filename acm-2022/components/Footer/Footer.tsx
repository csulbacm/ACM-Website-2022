import React from 'react';
import { Typography } from '@material-tailwind/react';
import SocialsContainer from '../Socials/Socials';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <SocialsContainer />
                        <Typography className="text-gray-300 text-center md:text-right">
                            &copy; {new Date().getFullYear()} CSULB ACM
                        </Typography>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
