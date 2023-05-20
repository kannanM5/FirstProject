import axios from "./Services";

// export const loginService = (data) => {
//      return axios.post("dashboard/dashboard",data)
//     return axios.post("dashboard/login_report", data);
//   };

export const loginService = (data) => {
  return axios.post("/login", data);
};

export const masterAccount = (data) => {
  return axios.post("/master_table/add_account_number", data);
};
