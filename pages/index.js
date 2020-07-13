import Head from 'next/head';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div style={{
      height: '100vh'
    }}>

      <Head>
        <title>title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>

      <div style={{
        height: 750,
        width: '100%',
        background: '#3F3E3A',
        float: 'left',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '0 0px 35px 35px',
      }}>
        <div>
          <img src={"/asset/logo.svg"} alt="" style={{
            marginTop: 100,
            height: 80
          }}/>
        </div>
        <div style={{
          color: '#fff',
          // color: '#DBDAD6',
          fontWeight: 'bold',
          fontSize: '20px',
          marginTop: 10,
          letterSpacing: '2px'
        }}>
          我是Joshua Peng, 欢迎来到我的博客
        </div>
        <div style={{
          marginTop: 20,
          display: 'flex',
        }}>
          <div>
            <button style={{
              height: '40px',
              width: '140px',
              borderRadius: '15px',
              border: '4px solid #484643',
              marginRight: 30,
              background: '#3F3E3A',
              color: '#938E83'
            }}>
              关于我
            </button>
          </div>
          <div>
            <button
              style={{
                height: '40px',
                width: '140px',
                borderRadius: '15px',
                border: '0',
                color: '#DBDAD6',
                letterSpacing: '4px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
              }}
            >
              文章
            </button>
          </div>
        </div>
        <div style={{
          marginTop: 100
        }}>
          <input style={{
            width: 300,
            height: 40,
            borderRadius: '10px',
            border: '0'
          }} type="text"/>
        </div>
        <div style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '20px',
          marginTop: 80,
          letterSpacing: '2px',

        }}>
          联系我
        </div>
        <div style={{
          marginTop: 20
        }}>
          <GitHubIcon style={{
            color: '#fff'
          }}/>
          <MailOutlineIcon style={{
            color: '#fff',
            margin: '0 20px 0 20px'
          }}/>
          <TwitterIcon style={{
            color: '#fff'
          }}/>
        </div>
        <div style={{
          marginTop: '100px'
        }}>
          <Link href={'/articles'}>
            <a><ExpandMoreIcon style={{
              color: '#fff'
            }}/></a>
          </Link>
        </div>
      </div>
      <div style={{
        height: '100%',
        width: '100%',
        // background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
        // background: 'linear-gradient(#D09FFE, #FFFFFF)'
      }}>

      </div>
    </div>
  );
}
