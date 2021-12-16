import axios from "./index";

const userAPI = {
  postUser: data => {
    return axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data,
      url: "/users"
    }).then(response => {
      if (response) {
        return response;
      } else {
        throw new Error('Something went wrong ...');
      }
    }).catch(error => error.response);
  },
  loginUser: data => {
    return axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      data,
      url: "/sessions/create"
    }).then(response => {
      if (response) {
        return response;
      } else {
        throw new Error('Something went wrong ...');
      }
    }).catch(error => error.response);
  },
  getProtectedRamdom: token => {
    return axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      url: "/api/protected/random-quote"
    });
  },
  getRamdomQuote: () => {
    return axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url: "/api/random-quote"
    });
  }
}

export default userAPI;