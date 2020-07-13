import React from 'react';

import Nav from '../../components/Nav';
import Footer from "../../components/Footer";

function Index() {
  return (
    <div>
      <div style={{
        display: 'flex',
        // height: '100vh',
        // width: '100vw'
      }}>
        <div style={{
          height: '100%',
          width: '100%',
          background: '#000',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            color: '#fff',
            margin: 40,
            fontWeight: 'bold',
            fontSize: '30px'
          }}>
            留言板
          </div>

          <div style={{
            color: '#fff',
            margin: 50,
            fontWeight: 'bold',
            fontSize: '30px'
          }}>
            <span>"</span>
            山有木兮木有枝。 心悦君兮君不知
            <span>"</span>
          </div>

          <div style={{
            height: '400px',
            width: '800px',
            border: '2px solid #fff'
          }}>

          </div>
        </div>
        <Nav/>
      </div>

      <Footer/>
    </div>
  );
}

export default Index;
