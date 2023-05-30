import axios from "axios";

const endpoint = process.env.API_URL_DEV;

export const fetchSlideData = async (setImages) => {
  const response = await axios.get(endpoint + "/galeria");
  setImages(response.data);
};
