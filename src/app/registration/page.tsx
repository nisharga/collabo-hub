"use client"
import Form from "@/components/form/form";
import { SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import FormInput from './../../components/form/frominput';
import Footer from "@/components/shared/footer";
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { createUser } from "@/redux/feature/userSlice/userSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
    email: string;
    id: string;
    password: string;
};


const Registration = () => {
    const [image, setImage] = useState(); 
    const [isLoading, setIsLoading] = useState(false) 
    const {user} = useAppSelector((state) => state.user)
    const router = useRouter();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user?.email ){
            router.push('/');
            toast.success("Register Sucessfully")
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])


    const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
            console.log(data.email, data.password)
            setIsLoading(true);
            dispatch(createUser({email: data?.email, password: data.password}));
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }catch(err){}
    }

    
  const onChange = (e: any) => { 
     const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data.url)
        
      });
  };
  console.log(user);
   return (
        <div>
            <h2>Register</h2>
            <Form submitHandler={onsubmit}>
     <div>
       <FormInput name="name"
                type="text"
                size="large"
                label="Username"
         />
    </div>
    <div>
       <FormInput name="email"
                type="email"
                size="large"
                label="Email"
         />
    </div>
    <div>
       <FormInput name="password"
                type="password"
                size="large"
                label="Password"
         />
    </div>
                            <div >
                                <input  
                                className="w-[100%] p-2"
                               placeholder="image add" 
                               type="file"
                               onChange={onChange}  
                               id="file-upload"
                               />
                           </div>

 
            <Button type="primary" htmlType="submit">
                        Register
                    </Button>
           </Form>
                <Footer/>
                <ToastContainer/>
        </div>
    );
};

export default Registration;