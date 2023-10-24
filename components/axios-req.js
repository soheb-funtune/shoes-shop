// "use client";
import axios from "axios";
export const getShoes = async (id) => {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/${id ? id : ""}`,
    headers: {
      "X-RapidAPI-Key": "5f45dd40b6msh27817332edb4912p1475adjsn308fbd1f438b",
      "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response?.data?.msg);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
