import axios from "axios";
export const callApi = async (url, requestType, body, auth) => {
  let host = 'http://localhost:2800/api/v1';
  let token = localStorage.getItem("authToken");

  if (requestType === "GET") {
    try {
      if (auth) {
        const data = await axios.get(host + url, {
          headers: { 'Authorization': token }
        })
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
        const data = await axios.post(host + url, body, {
          headers: {
            'Authorization': token,
            'Content-Type': body.profile_image ? 'multipart/form-data' : 'application/json'
          }
        })
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
      const data = await axios.delete(host + url, {
        headers: { 'Authorization': token }
      })
      return data;
    } catch (error) {
      if (error.response) {
        return error.response
      }
    }
  } else if (requestType === "PATCH") {
    try {
      const data = await axios.patch(host + url, body, {
        headers: {
          'Authorization': token,
          'Content-Type': body.profile_image ? 'multipart/form-data' : 'application/json'
        }
      })
      return data;
    } catch (error) {
      if (error.response) {
        return error.response
      }
    }
  }
};
