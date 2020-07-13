import React from 'react';
import {Tooltip} from "@material-ui/core";

function ScrollToTop() {
  return (
    <Tooltip title={'顶部'}>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        style={{
          height: '120px',
          width: '120px',
          position: "fixed",
          bottom: 20,
          left: 20,

          background: 'url(/asset/rocket.svg) no-repeat',
          backgroundPosition: 'center',
          cursor: 'pointer',
        }}/>
    </Tooltip>
  );
}

export default ScrollToTop;
