import ReactMarkdown from "react-markdown";
import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import Button from "@material-ui/core/Button";
import ReplyIcon from "@material-ui/icons/Reply";
import useStyles from './TreeViewItem.style';
import Avatar from "@material-ui/core/Avatar";
import CommentContext from "../CommentContext";
import {areEqual, cln} from "../helper";
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import useEditorStyle from '../editor/EditorState.style';
import {formatTime} from "../../../style/help";

const Content = React.memo(function Content({level, node, parent}) {
  const {state, dispatch, action} = useContext(CommentContext);
  const handleOpenModal = useCallback((reply, level) => {
    dispatch(action.openModal({reply, level}));
  }, [action, dispatch]);

  const setClickId = useCallback((clickId) => {
    dispatch(action.setClickId(clickId));
  }, [action, dispatch]);

  const handleOnAnimationEnd = useCallback(() => {
    dispatch(action.setClickId(null));

  }, []);
  return (
    <ContextContent
      setClickId={setClickId}
      handleOpenModal={handleOpenModal}
      clickId={state.get('clickId')}
      level={level}
      node={node}
      parent={parent}
      codeHighlighting={state.getIn(['config', 'codeHighlighting'])}
      onAnimationEnd={handleOnAnimationEnd}
    />
  );
}, areEqual);


const ContextContent = React.memo(function ContextContent(props) {
  const {level, node, parent, setClickId, handleOpenModal, clickId, codeHighlighting, handleOnAnimationEnd} = props;
  const classes = useStyles({level, link: node.get('website')});

  const shake = useMemo(() => {
    return node.get('id') === clickId;
  }, []);

  //没有填website则阻止跳转
  const handleOnNicknameClick = (e) => {
    if (!node.get('website')) {
      e.preventDefault();
    }
  };
  return (
    <div
      className={classes.contentWrapper}
      id={node.get('id')}
    >
      <div className={classes.userInfoWrapper}>
        <div>
          <Avatar
            src={`https://www.gravatar.com/avatar/${node.get('avatar')}`}
          />
        </div>
        <div className={classes.userInfo}>
          <a
            href={node.get('website')}
            target={'_blank'}
            rel="noopener noreferrer"
            onClick={handleOnNicknameClick}
            className={cln(classes.nickname, {'shake': shake})}
            onAnimationEnd={handleOnAnimationEnd}
          >
            {node.get('nickname')}
          </a>
          <p>
            <span>
              {node.get('browser')}
            </span>
            <span>
              {formatTime(node.get('create_date'))}
            </span>
            <span className={classes.replayIcon}>
              <ReplyButton
                level={level}
                reply={node.get('id')}
                handleOpenModal={handleOpenModal}
              />
            </span>
          </p>
        </div>
      </div>
      {
        parent && <ParentCommentContent
          parent={parent}
          setClickId={setClickId}
          codeHighlighting={codeHighlighting.get('quote')}
        />
      }
      <CommentContent
        content={node.get("content")}
        codeHighlighting={codeHighlighting.get('content')}
      />
    </div>
  );
}, areEqual);


const ParentCommentContent = React.memo(function ParentCommentContent(props) {
  const {codeHighlighting, parent, setClickId} = props;
  const classes = useStyles();
  const handleOnClick = () => {
    setClickId(parent.id);
  };
  return (
    <blockquote className={classes.blockquote}>
      <a
        className={classes.link}
        href={`#${parent.id}`}
        onClick={handleOnClick}>
        <span>
          @{parent.nickname}
        </span>
        <span>:</span>
        <span>
          <ReactMarkdown
            source={parent.content}
          />
        </span>
      </a>
    </blockquote>
  );
}, areEqual);

const CommentContent = React.memo(function CommentContent(props) {
  const {content, codeHighlighting} = props;
  const classes = useStyles();
  const editorStyle = useEditorStyle();
  const contentRef = useRef();
  const [overflow, setOverflow] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleOnClick = useCallback(() => {
    setHidden(false);
    setOverflow(false);
  }, []);

  useEffect(() => {
    const current = contentRef.current;
    if (current && hidden) {
      const isOverFlow = current.offsetHeight < current.scrollHeight;
      setOverflow(isOverFlow);
    }
  }, [hidden]);

  return (
    <>
      <div
        ref={contentRef}
        className={cln(classes.scroll, editorStyle.table, {[classes.overflow]: hidden})}
      >
        <ReactMarkdown source={content}/>
      </div>
      {
        overflow && hidden && (
          <div className={classes.loadMore}>
            <Button
              onClick={handleOnClick}
              color="primary"
            >
              查看更多...
            </Button>
          </div>
        )
      }
    </>
  );
});


const ReplyButton = React.memo(function ReplyButton(props) {
  const {handleOpenModal, reply, level} = props;
  const classes = useStyles();

  const handleOnClick = () => {
    handleOpenModal(reply, level);
  };

  return (
    <ReplyIcon
      onClick={handleOnClick}
      className={classes.replyIcon}/>
  );
});

export default Content;


Content.prototype = {
  level: PropTypes.number,
  node: PropTypes.instanceOf(Immutable.Map),
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  })
};

ContextContent.prototype = {
  level: PropTypes.number,
  node: PropTypes.instanceOf(Immutable.Map),
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
  setClickId: PropTypes.func,
  handleOpenModal: PropTypes.func,
  clickId: PropTypes.string,
  codeHighlighting: PropTypes.bool,
  handleOnAnimationEnd: PropTypes.func
};

ParentCommentContent.prototype = {
  clickId: PropTypes.string,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
};

CommentContent.prototype = {
  content: PropTypes.string
};


ReplyButton.prototype = {
  handleOpenModal: PropTypes.func,
  reply: PropTypes.string,
};
