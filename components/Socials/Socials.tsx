// create many small components to display each social media link
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitchIcon from '/twitch.png';

import DiscordIcon from '/discord.svg';
import { IconButton, Tooltip } from '@material-tailwind/react';

export const SocialsContainer = () => {
    return (
        <div className="flex justify-center gap-5">
            <DiscordLink />
            <InstagramLink />
            <YouTubeLink />
            <TwitterLink />
            <FacebookLink />
        </div>
    );
};

export const FacebookLink = () => {
    return (
        <Tooltip content="Facebook" placement="bottom">
            <IconButton size="lg" color="blue-gray">
                <a
                    href="https://www.facebook.com/csulbacm"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon />
                </a>
            </IconButton>
        </Tooltip>
    );
};
export const TwitterLink = () => {
    return (
        <Tooltip content="Twitter" placement="bottom">
            <IconButton size="lg" color="light-blue">
                <a
                    href="https://twitter.com/csulbacm"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon />
                </a>
            </IconButton>
        </Tooltip>
    );
};
export const InstagramLink = () => {
    return (
        <Tooltip content="Instagram" placement="bottom">
            <IconButton size="lg" color="deep-purple">
                <a
                    href="https://www.instagram.com/csulbacm/"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </a>
            </IconButton>
        </Tooltip>
    );
};
export const DiscordLink = () => {
    return (
        <Tooltip content="Discord" placement="bottom">
            <IconButton size="lg">
                <a
                    href="https://discord.com/invite/csulbacm"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <img src="/discord.svg" alt="Discord" />
                </a>
            </IconButton>
        </Tooltip>
    );
};
export const YouTubeLink = () => {
    return (
        <Tooltip content="YouTube" placement="bottom">
            <IconButton size="lg" color="red">
                <a
                    href="https://www.youtube.com/channel/UCbohZYGUm6qNFjnTbLhTHag/featured"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <YouTubeIcon />
                </a>
            </IconButton>
        </Tooltip>
    );
};

export default SocialsContainer;
