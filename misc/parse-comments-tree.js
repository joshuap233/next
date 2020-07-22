export function parseTreeData(data) {
  const tree = [];
  let subNodes = {};
  data.values.forEach(node => {
    node.child = [];
    if (!node.parent_id) {
      tree.push(node);
    }
    subNodes[node.id] = node;
  });
  Object.values(subNodes).forEach(node => {
    if (subNodes[node.parent_id]) {
      subNodes[node.parent_id].child.push(node);
    }
  });
  return tree;
}
