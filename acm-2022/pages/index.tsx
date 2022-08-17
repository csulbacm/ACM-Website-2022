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
import PageContainer from '../components/Pages/PageContainer/PageContainer';
import { ReactElement } from 'react';
import Sponsors from '../components/Sponsors/Sponsors';
import Officers from '../components/Officers/Officers';

const Home: NextPage = () => {
    const pages: ReactElement[] = [
        <PageOne />,
        <PageTwo />,
        <PageThree />,
        <PageFour />,
    ];
    return (
        <>
            <div className={styles.main}>
                <Test />
                <Sponsors />
                <hr />
                <Officers />
            </div>
            <PageContainer pages={pages} />
        </>
    );
};

export default Home;
