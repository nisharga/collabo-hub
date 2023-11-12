import CarouselHome from "@/components/home/Carousel";
import { Button, Carousel } from "antd";
 
 
export default function Home() {
  return (
    <main className="">
      <CarouselHome/>

       <h2>This is main page</h2>
       
       <div className="bg-red-500 text-[#fff] p-4">
          <Button type="default">Add</Button>
          {/* <Carousel>
              <div>
              1
              </div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
          </Carousel>
           */}
       </div>

       

    </main>
  )
}
