import React, {useCallback, useEffect, useState} from "react";
import {Box, useMediaQuery, useTheme} from "@material-ui/core";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PanToolIcon from '@material-ui/icons/PanTool';
import useStyles, {treeViewMaxWidth} from './TreeView.style';


const parseArticle = (article) => {
  const parseNode = (node) => {
    const getNodeLevel = (title) => {
      return title.replace('H', '');
    };
    return {
      title: node.innerText,
      id: node.id,
      level: parseInt(getNodeLevel(node.nodeName)),
      child: []
    };
  };
  const parser = new DOMParser();

  const doc = parser.parseFromString(article, 'text/html');
  const nodeList = doc.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const nodes = Array.prototype.map.call(nodeList, (node) => {
    return parseNode(node);
  });
  const generateTree = () => {
    const tree = [];
    let parentIndex;
    let parentNode;
    nodes.forEach((node, index) => {
      parentIndex = index - 1;
      parentNode = nodes[parentIndex];
      while (parentNode && parentIndex >= 0 && node.level <= parentNode.level) {
        parentIndex--;
        parentNode = nodes[parentIndex];
      }
      parentIndex < 0 ?
        tree.push(node) :
        parentNode.child.push(node);
    });
    return tree;
  };
  return generateTree();
};


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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));
  useEffect(() => {
    setContentsOpen(!matches);
  }, [matches]);

  const handleOnClick = useCallback(() => {
    setContentsOpen(open => !open);
  }, []);


  const [dictTree, setDictTree] = useState(null);
  useEffect(() => {
    setDictTree(parseArticle(htmlString));
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
