import React, {useCallback, useContext, useEffect} from "react";
import Divider from '@material-ui/core/Divider';
import Content from './TreeViewItem';
import CommentContext from "../CommentContext";
import {areEqual} from "../helper";
import {Button, Box} from '@material-ui/core';
import useStyles from './TreeView.style';
import PropTypes from 'prop-types';


const TreeNode = React.memo(function Node(props) {
  const {nodes, parent, level, comment_id} = props;
  if (nodes.length !== 0) {
    return (
      nodes.map(node => (
        <Box key={node.id}>
          <Content
            level={level}
            node={node}
            parent={parent}
            comment_id={comment_id ? comment_id : node.id}
          />
          <Divider variant={'middle'}/>
          {
            node.child && node.child.length !== 0 && (
              <TreeNode
                // 顶层评论id
                comment_id={comment_id ? comment_id : node.id}
                nodes={node.child}
                parent={{
                  id: node.id,
                  content: node.content,
                  nickname: node.nickname
                }}
                level={level + 1}
              />
            )
          }
        </Box>
      ))
    );
  }
  return <></>;
}, areEqual);

export default React.memo(function TreeView(props) {
    const {comments, loadMoreAPi} = props;
    const {state, dispatch, action} = useContext(CommentContext);
    const classes = useStyles();
    useEffect(() => {
      dispatch(action.mergeDictTree(comments));
    }, [action, dispatch]);

    const handleOnClick = useCallback(() => {
      //TODO:更新评论id
      loadMoreAPi().then(res => {
        dispatch(action.mergeDictTree(res.data));
        if (res.bottom) {
          dispatch(action.setBottom());
        }
      });
    }, [loadMoreAPi]);
    return (
      <div className={classes.treeWrapper}>
        <TreeNode
          //第一层level为0
          level={0}
          nodes={state.dictTree}
        />
        {
          !state.bottom && (
            <div>
              <div className={classes.loadMoreButton}>
                <Button
                  onClick={handleOnClick}
                >
                  加载更多...
                </Button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
);

TreeNode.prototype = {
  nodes: PropTypes.array.isRequired,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
  level: PropTypes.number
};

