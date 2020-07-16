import React from 'react';
import Layout from "../../components/Layout";
import useStyles from './About.style';

function IndexPage() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div>
          <h1>关于我</h1>
          <div className={classes.poem}>
            <span>"</span>
            <span>
              <img src="/asset/water_drop.svg" alt=""/>
            </span>
            <span>
              与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。
              自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。
              使两个文明命悬一线的黑暗森林打击，不过是宇宙战场上一个微不足道的插曲。真正的星际战争没人见过，也不可能见到，因为战争的方式和武器已经远远超出人类的想象，目睹战场之日，即是灭亡之时。
              宇宙的田园时代已经远去，昙花一现的终极之美最终变成任何智慧体都无法做出的梦，变成游吟诗人缥缈的残歌；宇宙的物竞天择已到了最惨烈的时刻，在亿万光年暗无天日的战场上，深渊最底层的毁灭力量被唤醒，太空变成了死神广阔的披风。
              太阳系中的人们永远不会知道这一切，最后直面真相的，只有两双眼睛
            </span>
            <span>"</span>
          </div>
          <div className={classes.websiteWrapper}>
            <h2>
              网站
            </h2>

            <span>图片来源:</span>
            <ul>
              <li>
                <a href="https://unsplash.com/" target={"_blank"}>unsplash</a>
              </li>
              <li>
                <a href="https://undraw.co" target={"_blank"}>undraw</a>
              </li>
            </ul>
          </div>

          <div
            className={classes.aboutMe}
          >
            <h2>
              关于我
            </h2>
            <p>会一点Python,会一点JavaScript,半吊子前端,后端选手,弱鸡Docker,Ubuntu玩家,算法被小学生吊打</p>
            <p>啥都会一点,啥都听说过一点,啥都想学,可啥都不精</p>
            <p>想学游戏,想学网络安全,可一直在做web开发</p>
            <p>社恐惧死宅</p>
            <p>假的三体玩家,名侦探柯南假粉</p>
            <p>选择恐惧症</p>
          </div>

          <div className={classes.blog}>
            <h2>
              博客源码
            </h2>
            <p>github</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
