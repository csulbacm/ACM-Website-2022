import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Test from '../components/Navbar/Navbar';
import Sponsors from '../components/Sponsors/Sponsors';

import EventsContainer from '../components/Events/EventsContainer';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { useSpring, useScroll, motion } from 'framer-motion';

const DynamicLandingPage = dynamic(() => import('../components/LandingPage'), {
    suspense: true,
});
const DynamicOfficers = dynamic(
    () => import('../components/Officers/Officers'),
    {
        suspense: true,
    },
);
const DynamicEvents = dynamic(
    () => import('../components/Events/EventsContainer'),
    {
        suspense: true,
    },
);
const DynamicSponsors = dynamic(
    () => import('../components/Sponsors/Sponsors'),
    {
        suspense: true,
    },
);
const DynamicFooter = dynamic(() => import('../components/Footer/Footer'), {
    suspense: true,
});
const DynamicAbout = dynamic(() => import('../components/About/About'), {
    suspense: true,
});

const Home: NextPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         setMousePosition({ x: e.clientX - 16, y: e.clientY - 16 });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, [mousePosition]);
    // const cursorVariants = {
    //     default: {
    //         x: mousePosition.x,
    //         y: mousePosition.y,
    //     },
    // };
    const loading = () => {
        return <div>Loading ...</div>;
    };
    return (
        <>
            <div className={styles.main}>
                <motion.div className="progress-bar" style={{ scaleX }} />

                {/* <motion.div
                    className="cursor"
                    variants={cursorVariants}
                    animate="default"
                /> */}
                <Test />
                <Suspense fallback={loading()}>
                    <DynamicLandingPage />
                </Suspense>
                <br />
                <hr id="about" />
                <About />

                <br />
                <hr id="events" />
                <Suspense fallback={loading()}>
                    <DynamicEvents />
                </Suspense>
                <br />
                <hr id="officers" />
                <Suspense fallback={loading()}>
                    <DynamicOfficers />
                </Suspense>
                <br />
                <hr id="sponsors" />
                <Suspense fallback={loading()}>
                    <Sponsors />
                </Suspense>
                <br />
                <hr id="footer" />
                <Footer />
            </div>
        </>
    );
};

export default Home;
