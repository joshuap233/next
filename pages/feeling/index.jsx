import React from 'react';

import Container from '../../components/Container';
import {Avatar, Divider, Box, makeStyles, Button} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyle = makeStyles({
  divider: {
    backgroundColor: '#fff'
  }
});

function Index() {
  const classes = useStyle();
  return (
    <Container>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: '100%'
      }}>
        <h1 style={{}}>日志</h1>
        <div>
          <span>"</span>
          <span>
          君不见黄河之水天上，奔流到海不复回。
          君不见高堂明镜悲白发，朝如青丝暮成雪
        </span>
          <span>"</span>
        </div>
        {
          [1, 2].map(item => {
            return (
              <>
                <div style={{
                  display: "flex",
                  width: '800px',
                  height: '150px',
                  marginTop: '40px'
                }}>
                  <Avatar src="/asset/avatar.jpeg"/>
                  <Box
                    boxShadow={1}
                    style={{
                      width: '100%',
                      height: '120px',
                      border: '1px solid #000',
                      borderRadius: '5px',
                      marginLeft: 20,

                      background: '#000',
                      color: '#fff'
                    }}>
                    <div style={{
                      height: '80px',
                      padding: '10px'
                    }}>
                      内容
                    </div>
                    <Divider
                      variant="middle"
                      classes={{root: classes.divider}}
                    />
                    <div style={{
                      padding: '10px',
                      display: "flex",
                      alignItems: 'center'
                    }}>
                      <EventAvailableIcon/>
                      <span style={{
                        marginLeft: '10px'
                      }}>2019/10/2 12:10</span>
                    </div>
                  </Box>

                </div>


                <div style={{
                  display: "flex",
                  width: '800px',
                  height: '150px',
                  marginTop: '40px'
                }}>
                  <Avatar src="/asset/avatar.jpeg"/>
                  <Box
                    boxShadow={1}
                    style={{
                      width: '100%',
                      height: '120px',
                      border: '1px solid #fff',
                      borderRadius: '5px',
                      marginLeft: 20,

                      background: '#fff',
                      color: '#000'
                    }}>
                    <div style={{
                      height: '80px',
                      padding: '10px'
                    }}>
                      内容
                    </div>
                    <Divider variant="middle"/>
                    <div style={{
                      padding: '10px',
                      display: "flex",
                      alignItems: 'center'
                    }}>
                      <EventAvailableIcon/>
                      <span style={{
                        marginLeft: '10px'
                      }}>2019/10/2 12:10</span>
                    </div>
                  </Box>
                </div>
              </>
            );
          })
        }
        <Button style={{
          marginTop: 40
        }}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
