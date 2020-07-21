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
    index
  } = props;

  const dark = index % 2 === 0;
  const classes = useStyles({url, dark});
  return (
    <div className={classes.excerptWrapper}>
      <div>
        <Link href={`${route.article.route}/[pid]`} as={`${route.article.route}/${id}`}>
          <div className={classes.articleInfo}>
            <h2>{title}</h2>
            <p>
              {/*不要删除span*/}
              <span/>{content}
            </p>
            <div>
              {commentsCount}条评论|{formatTime(time)}|{tag}
            </div>
          </div>
        </Link>
        <Link href={`${route.article.route}/[pid]`} as={`${route.article.route}/${id}`}>
          <div className={classes.pic}/>
        </Link>
      </div>
    </div>
  );
}

export default Excerpt;
