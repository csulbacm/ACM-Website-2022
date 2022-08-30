import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Test from '../components/Navbar/Navbar';
import Sponsors from '../components/Sponsors/Sponsors';
import Officers from '../components/Officers/Officers';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import LandingPage from '../components/LandingPage';

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.main}>
                <Test />
                <About />
                <LandingPage />
                <hr />
                <Officers />

                <hr />
                <Sponsors />
                <hr />
                <Footer />
            </div>
        </>
    );
};

export default Home;
