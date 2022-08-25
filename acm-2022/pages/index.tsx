import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Test from '../components/Navbar/Navbar';
import Sponsors from '../components/Sponsors/Sponsors';
import Officers from '../components/Officers/Officers';
import LandingPage from '../components/LandingPage';

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.main}>
                <Test />
                <LandingPage/>
                <Sponsors />
                <hr />
                <Officers />
            </div>
        </>
    );
};

export default Home;
