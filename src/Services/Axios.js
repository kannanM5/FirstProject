import axios from "axios";
import { baseUrl } from "../Utilities/Constants";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
