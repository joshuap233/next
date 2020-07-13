import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import Link from 'next/link';
import {Button} from "@material-ui/core";


function Excerpt({pid}) {
  return (
    <Link href={`/article/${pid}}`}>
      <div style={{
        width: '900px',
        height: '300px',
        background: '#fff',
        marginTop: '40px',
        cursor: 'pointer'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}>
          <div style={{
            width: '550px',
            margin: '10px'
          }}>
            <h2>我做了一个可以锻炼视力的 App</h2>
            <p style={{
              letterSpacing: '3px',
              lineHeight: '20px'
            }}>
            <span style={{
              marginLeft: '10px',
            }}/>
              没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。
              没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。
            </p>

            <div style={{
              color: '#888',
              letterSpacing: '3px',
              lineHeight: '20px'
            }}>
              1条评论|2019-2-10 3:00|新app,测试
            </div>
          </div>
          <div
            style={{
              width: '300px',
              height: '200px',

              background: '#000 url(/asset/test1.svg) no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',

              boxShadow: '0 2px 5px rgba(0,0,25,0.1), 0 5px 75px 1px rgba(0,0,50,0.2)',
              borderRadius: '5px'
            }}>
          </div>
        </div>
      </div>
    </Link>
  );
}

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
          // background: '#000',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Excerpt pid={1}/>
          <Excerpt pid={2}/>
          <Excerpt pid={3}/>
          <Button
            style={{
              border: 'none',
              width: '100px',
              height: '38px',
              marginBottom: 20,
              borderRadius: 10,
            }}>
            下一页
          </Button>
          <Footer/>
        </div>
        <Nav/>
      </div>
    </div>
  );
}

export default Index;
