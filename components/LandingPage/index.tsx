import { Card, Typography } from '@material-tailwind/react';
import SocialMedia from './socialMedia';
import SocialsContainer from '../Socials/Socials';
import Banner from './Banner';
import { motion } from 'framer-motion';
import Image from 'next/image';
const LandingPage = () => {
    const backgroundUrl = './bg.jpeg';
    return (
        <div
            id="particles-container"
            className="top-0 h-screen lg:h-70 justify-center items-center flex flex-col"
            style={{
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <Banner />
            <div className="backdrop-blur-md rounded-lg sm:w-full py-10 lg:w-1/3">
                <div
                    id="title__container"
                    className=" flex-col flex items-center justify-center w-auto text-white text-xs top-[40%]"
                >
                    <Typography variant="h1" className="">
                        CSULB ACM
                    </Typography>
                    <Image
                        src="/acm.svg"
                        alt="ACM"
                        width={200}
                        height={200}
                        className="w-2/5"
                        style={{
                            marginTop: '-1rem',
                        }}
                    />

                    <div
                        id="desktop_contents__container"
                        style={{}}
                        className="flex flex-col items-center justify-center w-auto text-white text-xs p-6"
                    >
                        <Typography variant="paragraph" className="text-center">
                            Welcome to the Association for Computing Machinery
                            (ACM)
                        </Typography>
                        <Typography variant="paragraph" className="text-center">
                            @California State University, Long Beach!
                        </Typography>
                        <br />
                        <Typography variant="paragraph" className="text-center">
                            ACM is the largest Computer Science student
                            organization at CSULB!
                        </Typography>
                    </div>
                </div>

                <div className="w-full flex-col flex items-center justify-center text-white ">
                    <Typography className="mb-10 lg:mb-4" variant="h6">
                        CONNECT WITH US ON
                    </Typography>
                    <SocialsContainer />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
