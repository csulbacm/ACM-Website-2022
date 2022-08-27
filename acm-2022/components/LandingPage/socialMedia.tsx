import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

// const appID = "861937135190917";
// const appSecret = "69b7d5ad956ba7d28dba38408d800e7d";

const SocialMedia = () => {
    const social = [
        {url: "https://www.facebook.com/csulbacm", icon: faFacebook},
        {url: "https://www.instagram.com/csulbacm/?hl=en", icon: faInstagram},
        {url: "https://discord.com/invite/csulbacm", icon: faDiscord},
        {url: "https://twitter.com/csulbacm?lang=en", icon: faTwitter},
        {url: "https://www.youtube.com/channel/UCbohZYGUm6qNFjnTbLhTHag/featured" , icon: faYoutube}
    ];
    const iconColor = "#FFA726";
    const ListItem = ({url, icon}:any): any => {
        return(
            <li className="flex items-center justify-center">
                <a href={url}>
                    <IconButton size="lg" variant="outlined">
                        <FontAwesomeIcon icon={icon} color={iconColor}/>
                    </IconButton>
                </a>
            </li>
        )
    }
    
    return (
        <ul className="grid grid-cols-5 gap-1 w-96">
            {
                social.map((v, k) => <ListItem url = {v.url} icon={v.icon} key = {k}/>)
            }
        </ul>
    );
}



export default SocialMedia;