import axiosClient from "./axiosClient"

const authApi = {
  doLogin(params) {
    const url = '/auth/login';
    return axiosClient.post(url, {params});
  }
}

export default authApi