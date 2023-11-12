"use client"

import { useState } from "react";
import {Layout, Menu} from 'antd'; 
import { USER_ROLE } from "@/constant/role";
import { SidebarItems } from "@/constant/sidebaritems";

const { Sider } = Layout;
 
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.ADMIN;
    return (
    <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
           <div
         style={{
          color: "white",
          fontSize: "22px",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        DashBoard
          </div>
        <Menu theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          style={{ "padding": "10px" }}
          items={SidebarItems(role)}
        />
      </Sider>
  )
}

export default Sidebar