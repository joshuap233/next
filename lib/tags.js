import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";
import getPoems from "../config/poems";


export async function getTagsData(page) {
  const res = await axios.get(api.tags, {
    params: {
      page,
      pageSize: paging.tags
    }
  });
  return {data: res.data.data, poem: getPoems()};

}


export async function getAllTagsPage() {
  const res = await axios.get(paths.tags);
  return res.data.data;
}
