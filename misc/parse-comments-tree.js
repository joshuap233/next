export function parseTreeData(data) {
  const tree = [];
  const subNodes = {};
  data.values.forEach(node => {
    node.child = [];
    tree.push(node);
    node.reply.values.forEach(node2 => {
      node2.child = [];
      if (!node2.parent_id) {
        node.child.push(node2);
      }
      subNodes[node2.id] = node2;
    });

    Object.keys(subNodes).forEach(node2 => {
      if (subNodes[node2.parent_id]) {
        subNodes[node2.parent_id].child.push(node2);
      }
    });
    delete node.reply;
  });
  return tree;
}
