import React from 'react';


function Footer() {
  return (
    <div style={{
      width: '100%'
    }}>
      <div style={{
        paddingTop: 20,
        height: '200px',
        width: '100%'
      }}/>
      <div style={{
        zIndex: '10',
        paddingTop: 20,
        height: '200px',
        width: '100%',
        // background: '#000',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        color: '#000'
      }}>
        <div>
          Powered by react-blog
        </div>
        <div>
          Copyright© Joshua peng
        </div>
        <div>
          本博客使用 CC BY-NC-SA 3.0 进行许可
        </div>
      </div>
    </div>
  );
}

export default Footer;
