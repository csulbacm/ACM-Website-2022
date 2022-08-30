import { Card, Typography } from '@material-tailwind/react';
import SocialMedia from './socialMedia';
import SocialsContainer from '../Socials/Socials';
import Banner from './Banner';
const LandingPage = () => {
    const backgroundUrl = './bg.jpeg';
    return (
        <div
            id="particles-container"
            className="top-0 h-screen lg:h-70"
            style={{ width: '100%', overflow: 'hidden' }}
        >
            <Banner />

            <div
                id="title__container"
                style={{
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                className="relative flex-col flex items-center justify-center w-auto text-white text-xs top-[40%]"
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
                        Welcome to the Association for Computing Machinery (ACM)
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

            <div
                className="w-full flex-col flex items-center justify-center absolute text-white "
                style={{
                    bottom: '0%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography className="mb-10 lg:mb-4" variant="h6">
                    CONNECT WITH US ON
                </Typography>
                <SocialsContainer />
            </div>
        </div>
    );
};

export default LandingPage;
