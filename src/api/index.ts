import axios from "axios";

export const getCurrency = () =>
  axios.get("https://www.cbr-xml-daily.ru/daily_json.js");

export const getNews = () =>
  axios.get(
    " https://newsapi.org/v2/top-headlines?country=us&apiKey=fc9f61ccb59f452a9cec3176e2451cb2",
    {
      params: {
        page: 1,
        limit: 20,
      },
    }
  );
