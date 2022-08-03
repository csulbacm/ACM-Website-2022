import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@material-tailwind/react';
import Test from '../components/Navbar/Navbar';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Test />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button>Hello world!</Button>
        </div>
    );
};

export default Home;
