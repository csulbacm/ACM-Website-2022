// create many small components to display each social media link
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialsContainer = () => {
    return (
        <div className="flex justify-center">
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
        <a
            href="https://www.facebook.com/csulbacm"
            target="blank"
            rel="noopener noreferrer"
        >
            <FacebookIcon />
        </a>
    );
};
export const TwitterLink = () => {
    return (
        <a
            href="https://twitter.com/csulbacm"
            target="blank"
            rel="noopener noreferrer"
        >
            <TwitterIcon />
        </a>
    );
};
export const InstagramLink = () => {
    return (
        <a
            href="https://www.instagram.com/csulbacm/"
            target="blank"
            rel="noopener noreferrer"
        >
            <InstagramIcon />
        </a>
    );
};
export const DiscordLink = () => {
    return (
        <a
            href="https://discord.com/invite/csulbacm"
            target="blank"
            rel="noopener noreferrer"
        >
            <DiscordIcon />
        </a>
    );
};
export const YouTubeLink = () => {
    return (
        <a
            href="https://www.youtube.com/channel/UCbohZYGUm6qNFjnTbLhTHag/featured"
            target="blank"
            rel="noopener noreferrer"
        >
            <YouTubeIcon />
        </a>
    );
};

export default SocialsContainer;
