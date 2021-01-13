import axios from "axios";
//Event service file for ajax requests with axios
const proxy = "https://cors-anywhere.herokuapp.com/"; //add proxy to avoid cors policy
const apiURL = "https://updates.suade.org/files/people.json"; //user api
const dataUrl = `${proxy}${apiURL}`;
const apiClient = axios.create({
  baseURL: dataUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get();
  },
};
