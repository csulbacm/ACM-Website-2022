import { Card, Typography } from '@material-tailwind/react';
import SocialMedia from './socialMedia';
import SocialsContainer from '../Socials/Socials';
import Banner from './Banner';
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
            <div className="backdrop-blur-md rounded-lg sm:w-full p-15 lg:w-1/2">
                <div
                    id="title__container"
                    className=" flex-col flex items-center justify-center w-auto text-white text-xs top-[40%]"
                >
                    <Typography variant="h1" className="">
                        CSULB ACM
                    </Typography>
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
                        <Typography variant="paragraph" className="text-center">
                            The ACM is the largest computer science student
                            organization in CSULB.
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
