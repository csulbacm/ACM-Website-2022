import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import CodeIcon from '@mui/icons-material/Code';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SettingsIcon from '@mui/icons-material/Settings';

const About = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center aboutContainer m-15 p-15">
            <Typography variant="h1" color="blue-gray" className="mb-2">
                About
            </Typography>

            <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
                <div className="">
                    <Image
                        src="/img1.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
                <div>
                    <Image
                        src="/img2.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
                <div>
                    <Image
                        src="/img3.jpg"
                        alt="/bg.jpeg"
                        width={'500'}
                        height={'300'}
                        className="rounded shadow-lg"
                    />
                </div>
            </Carousel>
            {/* Generate a positive paragraph about the purpose, goal, and missions of ACM at CSULB */}
            <Typography variant="body1" color="gray-800" className="mb-2">
                The Association for Computing Machinery (ACM) is a Student-Run,
                Professional Computer Science Organization here at CSULB. We are
                a group of students who are passionate about computer science
                and the technology that we use to solve problems.
            </Typography>
            {/* three main sections and subtexts: Coding, Connecting, and Contributing*/}
            <div className="w-full flex flex-wrap justify-around items-center gap-20 ">
                <div className="flex flex-col items-center justify-center w-1/3">
                    <Typography variant="h2" color="gray-800" className="mb-2">
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
                <div className="flex flex-col items-center justify-center w-1/3">
                    <Typography variant="h2" color="gray-800" className="mb-2">
                        Connecting
                    </Typography>
                    <RssFeedIcon className="mb-2" fontSize="large" />
                    <Typography
                        variant="body1"
                        color="gray-800"
                        className="mb-2"
                    >
                        Connect with students and Professional Representitives
                        from companies like Google, Apple, and many more!
                    </Typography>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3">
                    <Typography variant="h2" color="gray-800" className="mb-2">
                        Contributing
                    </Typography>
                    <SettingsIcon className="mb-2" fontSize="large" />
                    <Typography
                        variant="body1"
                        color="gray-800"
                        className="mb-2"
                    >
                        Contribute to ACM by participating in our events,
                        volunteering, and mentoring other students in our many
                        events throughout the year, including a Hackathon!
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default About;