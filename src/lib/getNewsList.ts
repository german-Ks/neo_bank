import { getNews } from "../api";

export const getNewsList = async () => {
  try {
    const res = await getNews();
    console.log(res);

    return res.data.articles;
  } catch (error: any) {
    console.error(error.massage);
    return [];
  }
};
