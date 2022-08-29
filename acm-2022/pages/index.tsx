import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Test from '../components/Navbar/Navbar';
import Sponsors from '../components/Sponsors/Sponsors';
import Officers from '../components/Officers/Officers';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.main}>
                <Test />
                <Sponsors />
                <hr />
                <Officers />
                <hr />
                <Socials />
                <hr />
                <Footer />
            </div>
        </>
    );
};

export default Home;
