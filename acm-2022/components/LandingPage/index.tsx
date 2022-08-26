import { Typography } from "@material-tailwind/react";
import SocialMedia from "./socialMedia";
const LandingPage = () => {
    const backgroundUrl = "./bg.jpeg";
    return(
        <>
        <div style={{ 
            color: "white",
            background: `rgba(0,0,0,0.45) url(${backgroundUrl})`,
            backgroundSize: "cover"
            }} className="min-h-screen w-full bg-no-repeat flex-col flex items-center justify-center bg-filter">
            
            <div className="flex-col flex items-center justify-center w-96 mb-10">
                <Typography variant="h1" className="my-12">(Title goes here)</Typography>
                <Typography variant="lead">
                Welcome to the Association for Computing Machinery at California State University, Long Beach! We are a community of diverse students brought together by our passion for computer science.
                </Typography>
            </div>

            <div className="w-full flex-col flex items-center justify-center">
                <Typography className="mb-10" variant="h6">CONNECT WITH US ON</Typography>
                <SocialMedia/>
            </div>
        </div>
        </>
    );
}

export default LandingPage;