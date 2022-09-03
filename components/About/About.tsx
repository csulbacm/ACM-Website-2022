import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Typography } from '@material-tailwind/react';
import CodeIcon from '@mui/icons-material/Code';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SettingsIcon from '@mui/icons-material/Settings';

const About = () => {
    return (
        <div className="sm:w-full lg:w-4/5 flex flex-col justify-center items-center aboutContainer m-15 p-15">
            <Typography variant="h1" color="blue-gray" className="mb-2">
                About
            </Typography>

            <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
                <div className="">
                    <img
                        src="/img1.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src="/img2.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src="/img3.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
            </Carousel>
            <br />
            {/* Generate a positive paragraph about the purpose, goal, and missions of ACM at CSULB */}
            <Typography
                variant="body1"
                color="gray-800"
                className="mb-2 w-3/4 text-black text-center my-5"
            >
                The Association for Computing Machinery (ACM) is a Student-Run,
                Professional Computer Science Organization at CSULB. We are a
                group of students who are passionate about computer science and
                the technology that we use to solve problems.
                <br />
                <br />
                We also work to strengthen the bond between the students, the
                faculty, and the Computer Engineering and Computer Science
                (CECS) department. A stronger relationship between students and
                their instructors engenders a friendly learning atmosphere.
            </Typography>
            {/* three main sections and subtexts: Coding, Connecting, and Contributing*/}
            <div className="w-full flex flex-wrap justify-around items-center gap-20 text-black">
                <div className="flex flex-col items-center justify-center w-2/5">
                    <Typography variant="h3" color="gray-800" className="mb-2">
                        Coding
                    </Typography>
                    <CodeIcon className=" mb-2" fontSize="large" />
                    <Typography
                        variant="body1"
                        color="gray-800"
                        className="mb-2"
                    >
                        Learn to code and build your own projects with
                        mentorship from other students.
                    </Typography>
                </div>
                <div className="flex flex-col items-center justify-center w-2/5">
                    <Typography variant="h3" color="gray-800" className="mb-2">
                        Connecting
                    </Typography>
                    <RssFeedIcon className="mb-2" fontSize="large" />
                    <Typography
                        variant="body1"
                        color="gray-800"
                        className="mb-2 w-full"
                    >
                        Connect with students and Professional Representitives
                        from companies like Google, Apple, and many more!
                    </Typography>
                </div>
                <div className="flex flex-col items-center justify-center w-2/5">
                    <Typography variant="h3" color="gray-800" className="mb-2">
                        Contributing
                    </Typography>
                    <SettingsIcon className="mb-2" fontSize="large" />
                    <Typography
                        variant="body1"
                        color="gray-800"
                        className="mb-2"
                    >
                        We are determined to advance the science and application
                        of information technology by providing students with
                        real world information through guest speakers,
                        workshops, seminars, Hackathons, projects, and other
                        activities!
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default About;
