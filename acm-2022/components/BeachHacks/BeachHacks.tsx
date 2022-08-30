import React from 'react';
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import CrabImg from '../../public/img/crab.png';
const BeachHacks = () => {
    return (
        <div>
            <Typography variant="h1">BeachHacks</Typography>
            <Image src={CrabImg} alt="Crab" width={200} height={200} />
            <Typography variant="p">
                BeachHacks 6.0 is CSULB&apos;s annual 24-hour hackathon is
                coming Spring 2022! Stay connected to receive updates!
            </Typography>
        </div>
    );
};

export default BeachHacks;
