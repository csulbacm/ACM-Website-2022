import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Test from '../components/Navbar/Navbar';
import Sponsors from '../components/Sponsors/Sponsors';
import Officers from '../components/Officers/Officers';
import EventsContainer from '../components/Events/EventsContainer';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import LandingPage from '../components/LandingPage';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import { useSpring, useScroll, motion } from 'framer-motion';

const dynamicLandingPage = dynamic(() => import('../components/LandingPage'), {
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
                <Suspense fallback={<div>Loading...</div>}>
                    <LandingPage />
                </Suspense>
                <br />
                <hr id="about" />
                <About />
                <br />
                <hr id="officers" />
                <Officers />
                <br />
                <hr id="events" />
                <EventsContainer />
                <br />
                <hr id="sponsors" />
                <Sponsors />
                <br />
                <hr id="footer" />
                <Footer />
            </div>
        </>
    );
};

export default Home;
