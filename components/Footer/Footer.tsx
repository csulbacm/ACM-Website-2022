import React from 'react';
import { Typography } from '@material-tailwind/react';
import SocialsContainer from '../Socials/Socials';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-gray-800">
                <div className="flex flex-col px-4 py-8">
                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-row justify-center items-center">
                            <ArrowBackIosNewIcon
                                fontSize="large"
                                className="blinkage"
                                sx={{
                                    color: 'white',
                                    rotate: '180deg',
                                    animation: 'flash 1s infinite',
                                }}
                            />

                            <Typography
                                variant="h2"
                                className="text-center text-white"
                            >
                                CONNECT WITH US!
                            </Typography>
                        </div>
                        <br />
                        <SocialsContainer />
                        <br />
                        <Typography className="text-gray-300 text-center ">
                            &copy; {new Date().getFullYear()} CSULB ACM
                        </Typography>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
