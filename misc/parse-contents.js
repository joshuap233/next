export function parseArticle(article) {
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
