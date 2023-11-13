"use client"
import Form from '@/components/form/form';
import FormInput from '@/components/form/frominput';
import { Button } from 'antd';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import FormTextArea from '@/components/form/formtextarea';
type FormValues = {
    id: string;
    password: string;
};
import { notification } from 'antd';
import Notification from '@/components/dashboard/ui/Notification';
const FeedBack = () => {
    const [rating, setRating] = useState<number>(0);

    //after form submit notify
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

      const onsubmit: SubmitHandler<FormValues> = (data) => {
        try{
            console.log(data, rating)
            openNotification()
            
        }catch(err){}
    }
    return (
        <div>
           <h2>Feed Back</h2>  
           <Form submitHandler={onsubmit}>
           <div className="">
                        <FormInput
                            name="username"
                            type="text"
                            size="large"
                            label="User Name"
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
    <Rate allowHalf 
    allowClear={true} defaultValue={rating} onChange={(value) => {setRating(value) }}/>
    </div>
    <div>
       <FormTextArea name="suggestions"
                rows={4} placeholder="suggestions"
                size="large"
                label="Suggestions"
         />
    </div> 
    {/* notification                    */}
    {contextHolder}
    <Notification/>
    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>

        </div>
    );
};

export default FeedBack;