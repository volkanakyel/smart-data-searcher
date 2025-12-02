import axios from "axios";

const apiURL = "https://updates.suade.org/files/people.json";

const apiClient = axios.create({
  baseURL: apiURL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.message);
    return Promise.reject(error);
  }
);

export default {
  getUsers() {
    return apiClient.get("");
  },
};
