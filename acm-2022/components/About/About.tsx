import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { Typography } from '@material-tailwind/react';
const About = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-center items-center">
      <Typography variant="h1" color="blue-gray" className="mb-2">About</Typography>
      <div className="w-1/2">
      <Carousel autoPlay={true} showArrows={false}>
        <div className="w-full">
            <Image src="/img1.jpg" alt="/bg.jpeg" width={"500"} height={"300"} className="rounded shadow-lg"/>
        </div>
        <div>
            <Image src="/img2.jpg" alt="/bg.jpeg" width={"500"} height={"300"} className="rounded shadow-lg"/>
        </div>
        <div>
            <Image src="/img3.jpg" alt="/bg.jpeg" width={"500"} height={"300"} className="rounded shadow-lg"/>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default About