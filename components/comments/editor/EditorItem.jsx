import React, {useCallback, useContext, useMemo} from "react";
import {TextField, Collapse} from "@material-ui/core";
import CommentContext from "../CommentContext";
import useStyles from './EditorItem.style';
import {getNewComments, cln} from "../helper";
import md5 from "crypto-js/md5";
import ReactMarkdown from "react-markdown";
import PageviewIcon from "@material-ui/icons/Pageview";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import EditIcon from "@material-ui/icons/Edit";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import PublishIcon from '@material-ui/icons/Publish';
import PropTypes from "prop-types";
import useEditorStyle from './EditorState.style';
import {random} from '../../../misc/pseudo-random';
import {emoji} from './emoji';
import {useSubmit} from "../hooks";


export const Field = React.memo(function Field({name, ...props}) {
  const {state, dispatch, action} = useContext(CommentContext);
  const fieldValue = state.editorState[name];
  const handleOnChange = useCallback((e) => {
    const {value} = e.target;
    dispatch(action.updateEditorState(name, value));
  }, [action, dispatch, name]);

  return (
    <TextField
      {...props}
      value={fieldValue}
      onChange={handleOnChange}
    />
  );
});


// TODO: 超过最大高度换页
export const Emoji = React.memo(function Emoji({setCacheContent, show}) {
  const classes = useStyles();
  return (
    <Collapse in={show}>
      <div className={classes.emojiWrapper}>
        {
          emoji.map((item, index) => (
            <div
              onClick={() => {
                setCacheContent(cacheContent => cacheContent + item);
              }}
              key={index}
              className={classes.emoji}>
              {item}
            </div>
          ))
        }
      </div>
    </Collapse>
  );
});


export const SubmitButton = React.memo(function SubmitButton({cacheContent}) {
  const {state: {editorState, pid, reply, comment_id, level}, dispatch, action} = useContext(CommentContext);

  const submitApi = useSubmit(pid);
  const parseData = () => {
    const data = {...editorState};
    data.content = cacheContent;
    return getNewComments(data);
  };

  const setCommentLevel = (data) => {
    if (reply) {
      if (level !== 0) {
        data.parent_id = reply;
      }
      data.comment_id = comment_id;
    }
  };

  const handleResult = (res, data) => {
    data.id = res.data.id;
    if (reply === null) {
      dispatch(action.mergeDictTree([data])); //评论没有父评论,直接更新
    } else {
      dispatch(action.recursiveUpdateDictTree(data)); //有父评论则递归查找更新
    }
    dispatch(action.closeModal());
  };

  const handleOnSubmit = () => {
    const data = parseData();
    setCommentLevel(data);
    submitApi(data).then(res => {
      if (res.status && res.status === 'success') {
        handleResult(res, data);
      }
    });
  };

  return (
    <PublishIcon color="primary" onClick={handleOnSubmit}/>
  );
});


export const Preview = React.memo(function Preview(props) {
  const {cacheContent, show} = props;
  const classes = useStyles();
  const editorStyle = useEditorStyle();
  return (
    <Collapse in={show}>
      {
        show && (
          <div className={cln(classes.preview, editorStyle.table)}>
            <ReactMarkdown
              source={cacheContent}
            />
          </div>
        )
      }
    </Collapse>
  );
});

export const ToolBar = React.memo(function ToolBar(props) {
  const {handlePreviewClick, preview, handleEmojiClick, cacheContent} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const actions = useMemo(() => [
    {icon: <PageviewIcon color="primary"/>, name: preview ? '关闭预览' : '预览', handleOnClick: handlePreviewClick},
    {icon: <InsertEmoticonIcon color="primary"/>, name: '标签', handleOnClick: handleEmojiClick},
    {icon: <SubmitButton cacheContent={cacheContent}/>, name: '提交'},
  ], [cacheContent, handleEmojiClick, handlePreviewClick, preview]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const speedDialClass = useMemo(() => ({
    fab: classes.speedDialFab
  }), [classes.speedDialFab]);

  const speedDialActionStyle = useMemo(() => ({
    fab: classes.speedDialAction
  }), [classes.speedDialAction]);

  return (
    <SpeedDial
      ariaLabel="tool bar"
      className={classes.speedDial}
      icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      classes={speedDialClass}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          classes={speedDialActionStyle}
          tooltipTitle={action.name}
          onClick={action.handleOnClick}
          title={action.name}
        />
      ))}
    </SpeedDial>
  );
});

Field.prototype = {
  name: PropTypes.string
};

Emoji.prototype = {
  setCacheContent: PropTypes.func,
  show: PropTypes.bool
};

SubmitButton.prototype = {
  cacheContent: PropTypes.string,
};

Preview.prototype = {
  cacheContent: PropTypes.string,
  show: PropTypes.bool,
};

ToolBar.prototype = {
  handlePreviewClick: PropTypes.func,
  preview: PropTypes.bool,
  handleEmojiClick: PropTypes.func,
  cacheContent: PropTypes.string,
};
