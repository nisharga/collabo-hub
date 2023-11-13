"use client"
import Form from "@/components/form/form";
import { SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import FormInput from './../../components/form/frominput';
import Footer from "@/components/shared/footer";
import { useState } from 'react';

 


type FormValues = {
    id: string;
    password: string;
};


const Registration = () => {
    const [image, setImage] = useState(); 
    const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
            console.log(data)
            
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
        </div>
    );
};

export default Registration;