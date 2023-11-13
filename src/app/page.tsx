"use client"
import CarouselHome from "@/components/home/Carousel";
import auth from "@/redux/feature/userSlice/firebase";
import { setLoading, setUser } from "@/redux/feature/userSlice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { Button, Carousel } from "antd";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
 
 
export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged( auth, (user) => {
      if(user){
        dispatch(setUser(user.email))
        dispatch(setLoading(false))
      }
    } )
  }, [dispatch])
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
