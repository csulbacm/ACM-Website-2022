import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@material-tailwind/react';
import Test from '../components/Navbar/Navbar';
import PageOne from '../components/Pages/PageOne/PageOne';
import PageTwo from '../components/Pages/PageTwo/PageTwo';
import PageThree from '../components/Pages/PageThree/PageThree';
import PageFour from '../components/Pages/PageFour/PageFour';

const Home: NextPage = () => {
    return (
        <>
        <div className={`${styles.container} fixed`}>
            <Test />
        </div>
        <div className="h-screen w-full overflow-hidden scroll-smooth">
            <PageOne/>
            <PageTwo/>
            <PageThree/>
            <PageFour/>
        </div>
        </>
    );
};

export default Home;
