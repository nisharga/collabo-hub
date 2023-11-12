"use client"
import img1 from "../../../public/slider/one.jpg";
import img2 from "../../../public/slider/two.jpg";
import img3 from "../../../public/slider/three.jpg";
import img4 from "../../../public/slider/four.jpg";
import { Carousel } from 'antd'; 
import Image from "next/image";


const CarouselHome = () => {
  

  return (
    <>
       
      <Carousel dotPosition={"right"} effect="fade" autoplay={true} autoplaySpeed={3000}>
        <div>
           <Image
            src={img2}
            alt="Community One"
            priority 
           />
           
        </div>
        <div>
        <Image
            src={img4}
            alt="Community Two"
            priority
           />
        </div>
        <div>
        <Image
            src={img1}
            alt="Community Three"
            priority
           />
        </div>
        <div>
        <Image
            src={img3}
            alt="Community Four"
            priority
           />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselHome;