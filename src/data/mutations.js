import axios from "axios";

const endpoint = process.env.API_URL_DEV;

export const fetchSlideData = async (setImages) => {
  const response = await axios.get(endpoint + "/galeria");
  setImages(response.data);
};

export const fetchNewsByTitle = async (setNews, param) => {
  const response = await axios.get(endpoint + "/noticia/" + param);
  setNews(response.data);
};

export const fetchAllNews = async (setNews) => {
  const response = await axios.get(endpoint + "/noticia");
  setNews(response.data);
};
