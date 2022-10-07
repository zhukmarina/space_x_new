import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

instance.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      data: response.data,
    };
  },
  
);








export default instance;