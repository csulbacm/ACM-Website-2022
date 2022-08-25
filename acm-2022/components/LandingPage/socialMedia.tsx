import { IconButton } from "@material-tailwind/react";



const SocialMedia = () => {
    const social = ["https://www.facebook.com/csulbacm","https://www.instagram.com/csulbacm/?hl=en", "https://discord.com/invite/csulbacm","https://twitter.com/csulbacm?lang=en","https://www.youtube.com/channel/UCbohZYGUm6qNFjnTbLhTHag/featured" ];
    
    const ListItem = ({url}:any): any => {
        return(
            <li className="flex items-center justify-center">
                <a href={url}>
                    <IconButton variant="outlined">
                        <i className="fas fa-heart"/>
                    </IconButton>
                </a>
            </li>
        )
    }
    
    return (
        <ul className="grid grid-cols-5 gap-1 w-96">
            {
                social.map((v, k) => <ListItem url = {v} key = {k}/>)
            }
        </ul>
    );
}



export default SocialMedia;