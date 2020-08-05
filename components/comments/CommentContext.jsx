import React, {useReducer} from "react";
import {areEqual, updateDictTreeNode} from "./helper";

const defaultValue = {
  dictTree: [],
  page: 1,
  pid: 0,
  // 回复者id
  reply: null,
  // 编辑器拟态框,
  modalOpen: false,
  editorState: {
    content: '(つ´ω`)つ',
    nickname: 'Anonymous',
    email: '',
    website: '',
    avatar: ''
  },
  // 被点击的父级评论id
  clickId: null,
  bottom: false,
  config: {}
};


function reducer(state, action) {
  const {type, data} = action;
  switch (type) {
    case 'closeModal':
      return {
        ...state,
        modalOpen: false,
        reply: null,
      };
    case 'openModal':
      return {
        ...state,
        modalOpen: true,
        reply: data.reply,
      };
    case 'mergeDictTree':
      return {...state, dictTree: [...state.dictTree, ...data]};
    case 'recursiveUpdateDictTree':
      return {...state, 'dictTree': updateDictTreeNode(state.dictTree, state.reply, data)};
    case 'updateEditorState':
      return {...state, editorState: {...state.editorState, [action.field]: data}};
    case 'setClickId':
      return {...state, clickId: data};
    case 'setBottom':
      console.log(true);
      return {...state, bottom: true};
    case 'setState':
      return {...state, ...data};
    case 'incrementPage':
      return {...state, page: state.page + 1};
    default:
      throw new Error();
  }
}


const action = {
  closeModal: () => ({
    type: 'closeModal',
  }),
  openModal: (data) => ({
    type: 'openModal',
    data
  }),
  updateEditorState: (field, data) => ({
    type: 'updateEditorState',
    data,
    field
  }),
  mergeDictTree: (data) => ({
    type: 'mergeDictTree',
    data
  }),
  recursiveUpdateDictTree: (data) => ({
    type: 'recursiveUpdateDictTree',
    data
  }),
  setClickId: (data) => ({
    type: 'setClickId',
    data
  }),
  setBottom: () => ({
    type: 'setBottom',
  }),
  setState: (data) => ({
    type: 'setState',
    data
  }),
  incrementPage: () => ({
    type: 'incrementPage'
  })
};


const Provider = React.memo(function Provider(props) {
  const {children} = props;

  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <CommentContext.Provider value={{state, dispatch, action}}>
      {children}
    </CommentContext.Provider>
  );
}, areEqual);


const CommentContext = React.createContext({});

export {action, Provider};
export default CommentContext;
