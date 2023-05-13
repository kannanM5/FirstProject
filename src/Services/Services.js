import axios from "./Axios";

export const loginService = (data) => {
  return axios.post("dashboard/login_report", data);
};
