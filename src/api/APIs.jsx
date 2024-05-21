import axios from "axios";
export const callApi = async (url, requestType, body, auth) => {
  // let host = 'https://sanaidee.com/api/';
  let host = 'http://127.0.0.1:8000/api';
  // let companytoken = localStorage.getItem("cAuthToken");
  let token = localStorage.getItem("authToken");
  console.log("tokens: ", token);
  if (requestType === "GET") {
    try {
      if (auth) {
        const data = await axios.get(host + url,
          { headers: { 'Authorization': token } })
        return data;
      }
      const data = await axios.get(host + url);
      return data;
    } catch (err) {
      return err.response
    }
  } else if (requestType === "POST") {
    if (auth) {
      try {
        const data = await axios.post(host + url, body,
          { headers: { 'Authorization': token,'Content-Type': 'multipart/form-data',        } })
        return data;
      } catch (error) {
        if (error.response) {
          return error.response
        }
      }
    }
    else {
      try {
        const data = await axios.post(host + url, body)
        return data;
      } catch (error) {
        if (error.response) {
          return error.response
        }
      }
    }
  } else if (requestType === "DELETE") {
    try {
      const data = await axios.delete(host + url,
        { headers: { 'Authorization': token } })
      return data;
    } catch (error) {
      if (error.response) {
        return error.response
      }
    }
  }
};
