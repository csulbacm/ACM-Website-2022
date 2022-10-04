import { Avatar, Button, Stack, Typography } from '@mui/material';
import styles from '../styles/links.module.css';
import SocialsContainer from '../components/Socials/Socials';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const ShareIcon = dynamic(
        () =>
            import('../components/Links/ShareIcon').then(
                (mod) => mod.ShareIcon,
            ),
        {
            ssr: false,
        },
    );

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/csulbacm/ACM-Website-2022/main/public/json/links.json',
        ).then((res) => {
            res.json().then((data) => {
                setData(data);
            });
        });
    }, []);

    return (
        <div className={styles.main}>
            <ShareIcon />
            <div className={styles.content}>
                <Stack direction="column" spacing={3} justifyContent="center">
                    <Stack
                        direction="column"
                        className={styles.container}
                        spacing={2}
                    >
                        <Avatar
                            sx={{ height: 100, width: 100 }}
                            src="/logo.png"
                        />
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            CSULB ACM
                        </Typography>
                        <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
                            <SocialsContainer />
                        </div>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {data.map((item: any, index: any) => (
                            <Button
                                variant="contained"
                                key={index}
                                sx={{
                                    width: '90vw',
                                    maxWidth: 350,
                                    height: 50,
                                    color: 'white',
                                }}
                                href={item.url}
                                target="_blank"
                                disabled={!item.enabled}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};

export default Home;
