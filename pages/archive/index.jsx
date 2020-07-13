import React from 'react';
import Container from "../../components/Container";
import {Box, Divider, Button} from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


function Index() {
  return (
    <Container>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: '100%'
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: '960px'
        }}>
          <div>
            <h1>归档</h1>
          </div>
          <div style={{}}>
            <span>"</span>
            <span>
          今我来思,雨雪霏霏
        </span>
            <span>"</span>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '100px',
            padding: '20px'
          }}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                <Box
                  boxShadow={3}
                  style={{
                    width: '450px',
                    height: '100px',
                    marginRight: '20px',
                    margin: '5px',

                    position: "relative"
                  }}>
                  <div style={{
                    height: '40px',
                    display: "flex",
                    alignItems: "center",
                    marginLeft: '20px'
                  }}>title
                  </div>
                  <Divider/>
                  <div
                    style={{
                      display: "flex",
                      marginTop: '20px',
                      marginLeft: '20px'
                    }}
                  >
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <TodayIcon/>
                      <span style={{
                        marginLeft: 5
                      }}>2019/2/10</span>
                    </div>
                    <div style={{
                      marginLeft: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <LabelImportantIcon/>
                      <span style={{
                        marginLeft: 5
                      }}>
                        标签
                      </span>
                    </div>
                  </div>
                </Box>
              ))
            }
          </div>
          <Button style={{
            marginTop: 40
          }}>下一页</Button>
        </div>
      </div>
    </Container>
  );
}

export default Index;
