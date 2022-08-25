import { Typography } from "@material-tailwind/react";
import SocialMedia from "./socialMedia";
const LandingPage = () => {
    const backgroundUrl = "./bg.jpeg";
    return(
        <div style={{ 
            backgroundImage: `url(${backgroundUrl})` 
            
            }} className="min-h-screen w-full bg-no-repeat bg-cover flex-col flex items-center justify-center">
            
            <div className="flex-col flex items-center justify-center w-96 break-all mb-10">
                <Typography variant="h1" className="my-12">ACM</Typography>
                <Typography variant="lead">
                Material Tailwind is an easy to use components library for Tailwind CSS
                and Material Design. It provides a simple way to customize your
                components, you can change the colors, fonts, breakpoints and everything
                you need.
                </Typography>
            </div>

            <div className="w-full flex-col flex items-center justify-center">
                <Typography className="mb-10" variant="h6">CONNECT WITH US ON</Typography>
                <SocialMedia/>
            </div>
        </div>
    );
}

export default LandingPage;