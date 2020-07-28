import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";


export async function getTagsData(page) {
  const res = await axios.get(api.tags, {
    params: {
      page,
      pageSize: paging.tags
    }
  });
  return {data: res.data.data};

}


export async function getAllTagsPage() {
  const res = await axios.get(paths.tags);
  return res.data.data;
}
