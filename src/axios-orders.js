import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://custom-burger-d5b45-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
