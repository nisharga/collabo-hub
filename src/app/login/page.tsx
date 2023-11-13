"use client"
import Form from "@/components/form/form";
import FormInput from "@/components/form/frominput";
import { loginUser } from "@/redux/feature/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import {useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  [x: string]: string;
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.user)
    const router = useRouter();

    useEffect(() => {
        if(user?.email ){
            router.push('/');
            toast.success("Login Sucessfull!!")
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])

  const onsubmit: SubmitHandler<FormValues> = (data) => {
    try{
        dispatch(loginUser({email: data?.email, password: data?.password}));
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
           </Form>
           <ToastContainer/>
           </div>
  )
}

export default Login