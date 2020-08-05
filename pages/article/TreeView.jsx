import React, {useCallback, useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PanToolIcon from '@material-ui/icons/PanTool';
import useStyles from './TreeView.style';
import {parseArticle} from "../../misc/parse-contents";


function TreeNode({nodes}) {
  if (nodes.length !== 0) {
    return (
      <>
        {
          nodes.map(node => (
            <ul key={node.id}>
              <li title={node.title} style={{
                fontWeight: 150 * (6 - node.level)
              }}>
                <p>
                  <a href={`#${node.id}`}>{node.title}</a>
                </p>
              </li>
              {
                node.child.length !== 0 && (
                  <li style={{
                    marginLeft: node.level * 5
                  }}>
                    <TreeNode nodes={node.child}/>
                  </li>
                )
              }
            </ul>
          ))
        }
      </>
    );
  }
  return <></>;
}


export default function TreeView({htmlString, contentsOpen, setContentsOpen}) {
  const classes = useStyles({open: contentsOpen});

  const handleOnClick = useCallback(() => {
    setContentsOpen(open => !open);
  }, []);


  const [dictTree, setDictTree] = useState(null);
  useEffect(() => {
    const content = parseArticle(htmlString);
    if (content.length !== 0) {
      setContentsOpen(true);
      setDictTree(content);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Box boxShadow={8} component={'div'} className={classes.tree}>
        <div
          className={classes.icon}
          title={'可拖动'}
        >
          <PanToolIcon/>
        </div>
        {
          dictTree && <TreeNode nodes={dictTree}/>
        }
        <div
          onClick={handleOnClick}
          title={'隐藏'}
          className={classes.icon}>
          <VisibilityOffIcon/>
        </div>
      </Box>
    </div>
  );
}
