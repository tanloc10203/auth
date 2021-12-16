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
  }
}

export default userAPI;