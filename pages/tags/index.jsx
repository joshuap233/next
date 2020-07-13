import React from 'react';

import Head from 'next/head';
import {Box, Button} from "@material-ui/core";
import Container from "../../components/Container";
import ButtonBase from "@material-ui/core/ButtonBase";

function Index() {
  return (
    <Container>
      <div style={{
        height: '100%',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{}}>
          <h1>标签</h1>
        </div>

        <div>
          <span>"</span>
          <span>靖康耻，犹未雪。臣子恨，何时灭。驾长车，踏破贺兰山缺</span>
          <span>"</span>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '100px',
          width: '900px'
        }}>
          <Box
            component={ButtonBase}
            focusRipple
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

              position: "relative"
            }}>
            <div
              style={{
                position: 'absolute',
                left: '5px',
                top: '5px',

                width: '80px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.8',
                boxShadow: '0 14px 38px rgba(0,0,0,.08), 0 3px 8px rgba(0,0,0,.06)'
              }}>
              ubuntu
            </div>
            <div style={{
              position: 'absolute',
              left: '10px',
              bottom: '10px'
            }}>
              这是简介,这是简介,这是简介,
            </div>
          </Box>

          <Box
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

          </Box>

          <Box
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}>

          </Box>

          <Box
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

              display: 'flex',
              justifyContent: 'center',
              alignItems: "center"
            }}>
            <Box
              // boxShadow={2}
              style={{
                width: '80px',
                height: '40px',
                background: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                borderRadius: '10px',
                boxShadow: '0 14px 38px rgba(0,0,0,.08), 0 3px 8px rgba(0,0,0,.06)'
              }}>
              标签名
            </Box>
          </Box>

          <Box
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}>

          </Box>

          <Box
            boxShadow={3}
            style={{
              width: '280px',
              height: '180px',
              marginRight: '20px',
              margin: '5px',

              background: 'url(/asset/tag-pic.png) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}>
          </Box>
        </div>
        <Button style={{
          marginTop:'40px'
        }}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
