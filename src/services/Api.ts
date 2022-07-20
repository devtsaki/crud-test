import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

function assertData() {
  return axios.create({
    timeout: 0,
    responseType: "json",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const Data = assertData();

Data.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { Data };
