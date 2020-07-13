import Nav from './Nav';
import Footer from "./Footer";
import React from "react";

// 包含导航栏与页脚的容器
function Container({children}) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
      }}>
        {children}
        <Footer/>
      </div>
      <Nav/>
    </div>
  );
}

export default Container;
