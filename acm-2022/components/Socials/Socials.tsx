// create many small components to display each social media link
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitchIcon from '@mui/icons-material/Twitch';
import DiscordIcon from '../../public/img/discord.svg';
import Image from 'next/image';
import { IconButton } from '@material-tailwind/react';

export const SocialsContainer = () => {
    return (
        <div className="flex justify-center gap-5">
            <YouTubeLink />
            <FacebookLink />
            <TwitterLink />
            <InstagramLink />
            <DiscordLink />
        </div>
    );
};

export const FacebookLink = () => {
    return (
        <IconButton>
            <a
                href="https://www.facebook.com/csulbacm"
                target="blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </a>
        </IconButton>
    );
};
export const TwitterLink = () => {
    return (
        <IconButton>
            <a
                href="https://twitter.com/csulbacm"
                target="blank"
                rel="noopener noreferrer"
            >
                <TwitterIcon />
            </a>
        </IconButton>
    );
};
export const InstagramLink = () => {
    return (
        <IconButton>
            <a
                href="https://www.instagram.com/csulbacm/"
                target="blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </a>
        </IconButton>
    );
};
export const DiscordLink = () => {
    return (
        <IconButton>
            <a
                href="https://discord.com/invite/csulbacm"
                target="blank"
                rel="noopener noreferrer"
            >
                <Image src={DiscordIcon} />
            </a>
        </IconButton>
    );
};
export const YouTubeLink = () => {
    return (
        <IconButton>
            <a
                href="https://www.youtube.com/channel/UCbohZYGUm6qNFjnTbLhTHag/featured"
                target="blank"
                rel="noopener noreferrer"
            >
                <YouTubeIcon />
            </a>
        </IconButton>
    );
};

export default SocialsContainer;
