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
          Powered by
          <a href="https://github.com/vercel/next.js" target={"_blank"}
             style={{
               marginLeft: 5,
             }}
          >next-js</a>/
          <a href="https://github.com/pjshu/next" target={"_blank"}>next</a>
        </div>
        <div>
          Copyright© Joshua Peng
        </div>
        <div>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-Hans?__cf_chl_captcha_tk__=bf482acb9c6b1b61b3bff0116e795a3de4b94d24-1594630863-0-AXtv-2mXu6nX2f8zkYnFd2lbfrkhA7CBp2eC0vqxjq0KMxgxXGoLvBNuYaaZGwVx2aTjgluw_4OyZVQkcOumeei8lx8a_a9F68xP_QN1fc2kWjCpa4uw7rmDU1kmALt6ibhAV410WsZ6bmJFJe2ZW6aCCpycsO2MicSkF3XpId1FgCp01yy1Jk84RcmUAs_5ZMsj96RduNJweQIiTecKGVEzQcijvjY9Zrq0EpvM-9cqXEgevWLBA-pG9bJzMOKN8iBhMn-nwyLfZcaTDECW0NKhck0ZlgLZh_9aNu98m1kl_9vpC6WRtd1vdQasTcuZ5dyONZYD7KhtqGwYJ_CBM8rIqjR-cMhstnBRXdRLnrClIuEX4pwN0oyHgClxxqGTazatLBE_tbiNDjDceC7MnrPqFS-LDgqnWyfRJqv88FLl8epRYjbP9rQmRCgsUWXroVEVqi_1nIZbcGa2zXYrNjXdEKcNo944Ah2LwmnktgbfbonAAmJoF89hwT7zEtG00bPbywDi0B7KRQMLAS6dx1Uuusyr9nMy-h4mGjqqKMKppdnqm3Q-NDm4qK7rdTJzJaiOJMj7zFYqzhxhlJuw_Wc"
            target={"_blank"}
          >

            本博客使用 CC BY-NC-SA 4.0 进行许可
          </a>

        </div>
      </div>
    </div>
  );
}

export default Footer;
