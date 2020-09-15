import useStyles from "./Articles.style";
import Link from "next/link";
import route from "../../misc/route";
import {formatTime} from "../../misc/help";

function Excerpt(props) {
  const {
    id,
    title,
    content,
    url,
    time,
    commentsCount,
    tag,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.excerptWrapper}>
      <div>
        <Link href={`${route.article.route}/[pid]`} as={`${route.article.route}/${id}`}>
          <div className={classes.articleInfo}>
            <h2 className={'title'}>{title}</h2>
            <p className={'content'}>
              {/*不要删除span*/}
              <span/>
              {content}
            </p>
            <div>
              {/*TODO*/}
              {/*{commentsCount}条评论|*/}
              {formatTime(time)}{tag ? `|${tag}` : ''}
            </div>
          </div>
        </Link>
        <Link href={`${route.article.route}/[pid]`} as={`${route.article.route}/${id}`}>
          <div className={classes.pic}>
            <img src={url} alt=""/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Excerpt;
