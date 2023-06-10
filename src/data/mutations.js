import axios from "axios";

const endpoint = process.env.API_URL_DEV;

export const fetchSlideData = async (setImages) => {
  const response = await axios.get(endpoint + "/galeria");
  setImages(response.data);
};

export const fetchNewsById = async (setNews, param) => {
  const response = await axios.get(endpoint + "/noticia/" + param);
  setNews(response.data);
};

export const fetchAllNews = async (setNews) => {
  const response = await axios.get(endpoint + "/noticia");
  setNews(response.data);
};

export const getDate = (date) => {
  const data = date?.substring(5, 7);
  let month;
  switch (data) {
    case "01":
      month = "Jan";
    case "02":
      month = "Fev";
    case "03":
      month = "Mar";
    case "04":
      month = "Abr";
    case "05":
      month = "Mai";
    case "06":
      month = "Jun";
    case "07":
      month = "Jul";
    case "08":
      month = "Ago";
    case "09":
      month = "Set";
    case "10":
      month = "Out";
    case "11":
      month = "Nov";
    case "12":
      month = "Dez";
    default:
      break;
  }
  return `${date?.substring(8, 10)} de ${month}, ${date?.substring(0, 4)}`;
};
