import {random} from "../../misc/pseudo-random";
import md5 from "crypto-js/md5";

const getBrowserVersion = () => {
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
  const browsers = [
    'Edge', 'IE', 'Chrome', 'Opera', 'Firefox', 'Safari'
  ];
  for (let b of browsers) {
    const regex = new RegExp(b + '/.* ?', 'i');
    const match = userAgent.match(regex);
    if (match) {
      browser = match[0].split(' ')[0];
      break;
    }
  }
  return browser;
};


const getNewComments = (data) => {
  let website = data.website;
  if (website && !website.match('https?://')) {
    data.website = 'https://' + website;
  }

  return {
    ...data,
    website,
    id: random(),
    create_date: Math.floor((new Date()).getTime() / 1000),
    browser: getBrowserVersion(),
    avatar: data.email ? md5(data.email).toString() : '',
    child: [],
  };

};

const updateDictTreeNode = (nodes, id, data) => {
  const _updateDictTreeNode = (nodes) => {
    return nodes.map(node => {
      if (node.id === id) {
        return {...node, child: [...node.child, data]};
      } else {
        const res = _updateDictTreeNode(node.child);
        if (res !== node.child) {
          return {...node, child: res};
        }
        return node;
      }
    });
  };
  return _updateDictTreeNode(nodes);
};

const areEqual = (pre, next) => {
  let equal = true;
  for (let key of Object.keys(pre)) {
    if (!equal) {
      break;
    }
    if (key === 'parent') {
      equal = pre[key] ? pre[key].id === next[key].id : true;
    } else {
      equal = Object.is(pre[key], next[key]);
    }
  }
  return equal;
};
// combineClassName
const cln = (...classes) => {
  let className = '';
  classes.forEach(item => {
    if (item) {
      if (item instanceof Object) {
        const key = Object.keys(item)[0];
        const value = item[key];
        className = value ? className + `${key} ` : className;
      } else {
        className += `${className} `;
      }
    }
  });
  return className;
};

export {cln, getBrowserVersion, updateDictTreeNode, areEqual, getNewComments};
