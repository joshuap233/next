import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";
import getPoems from "../config/poems";

export async function getArchiveData(page) {
  const res = await axios.get(api.archive, {
    params: {
      page,
      pageSize: paging.archive
    },
  });
  return {data: res.data.data, poem: getPoems()};
}

export async function getAllArchivePage() {
  const res = await axios.get(paths.articles);
  return res.data.data;
}

