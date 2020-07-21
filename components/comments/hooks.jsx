import {useCallback} from "react";
import {commentsApi} from "../../misc/api";

const useLoadMore = () => {
  return useCallback((pid, page) => {
    return commentsApi.loadMore(pid, page);
  }, []);
};

const useSubmit = (pid) => {
  return useCallback((data) => {
    return commentsApi.submit(pid, data);
  }, [pid]);
};
export {useLoadMore, useSubmit};
