import React, {useCallback, useContext, useEffect} from "react";
import Divider from '@material-ui/core/Divider';
import Content from './TreeViewItem';
import CommentContext from "../CommentContext";
import {areEqual} from "../helper";
import {Box, Button} from '@material-ui/core';
import useStyles from './TreeView.style';
import PropTypes from 'prop-types';
import {useLoadMore} from "../hooks";


const TreeNode = React.memo(function Node(props) {
  const {nodes, parent, level} = props;
  if (nodes.length !== 0) {
    return (
      nodes.map(node => (
        <Box key={node.id}>
          <Content
            level={level}
            node={node}
            parent={parent}
          />
          <Divider variant={'middle'}/>
          {
            node.child && node.child.length !== 0 && (
              <TreeNode
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

export default function TreeView(props) {
  const {comments, pid} = props;
  const {state, dispatch, action} = useContext(CommentContext);
  const classes = useStyles();
  const loadMoreAPi = useLoadMore(state.page);

  useEffect(() => {
    dispatch(action.setState({pid}));
    dispatch(action.mergeDictTree(comments));
  }, [action, dispatch, pid]);

  const handleOnClick = useCallback(() => {
    loadMoreAPi(state.pid, state.page).then(res => {
      dispatch(action.incrementPage());
      dispatch(action.mergeDictTree(res.data.values));
      if (res.data.values.length === 0) {
        dispatch(action.setBottom());
      }
    });
  }, [loadMoreAPi, state.pid, state.page]);

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
};

TreeNode.prototype = {
  nodes: PropTypes.array.isRequired,
  parent: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    nickname: PropTypes.string
  }),
  level: PropTypes.number
};

TreeView.prototype = {
  comments: PropTypes.array.isRequired,
  pid: PropTypes.string.isRequired
};
