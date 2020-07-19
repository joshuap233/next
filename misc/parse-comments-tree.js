export function parseTreeData(data) {
  const tree = [];
  let subNodes = {};
  let commentNode = {};
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

    Object.keys(subNodes).forEach(key => {
      const node2 = subNodes[key];
      if (subNodes[node2.parent_id]) {
        subNodes[node2.parent_id].child.push(node2);
      }
    });

    subNodes = {};
    commentNode = {};
    delete node.reply;
  });
  return tree;
}
