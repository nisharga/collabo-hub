"use client"
import Form from "@/components/form/form";
import FormInput from "@/components/form/frominput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const Login = () => {
  const onsubmit: SubmitHandler<FormValues> = (data) => {
    try{
        console.log(data)
        
    }catch(err){}
}
  return (
    <div>
      
    <Form submitHandler={onsubmit}>
      
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

 
            <Button type="primary" htmlType="submit">
                        Login
                    </Button>
           </Form></div>
  )
}

export default Login