import axios from "axios";

const url =
  "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6";

const getProduct = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getProduct };
