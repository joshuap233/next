import axios from 'axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";

export async function getArchiveData(page) {
  const res = await axios.get(api.archive, {
    params: {
      page,
      pageSize: paging.archive
    },
  });
  return res.data.data;
}

export async function getAllArchivePage() {
  const res = await axios.get(paths.articles);
  return res.data.data;
}

