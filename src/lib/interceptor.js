/**
 * @name interceptor.js
 * @description API request and response can be mutate here
 * @author Surjeet Bhadauriya <surjeet@sixberries.com>
 * @version 0.0.0
 */

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  // headers: { Authorization: getToken() },
});

axiosInstance.interceptors.request.use((request) => {
  if (request.data) {
    delete request.data._id;
    delete request.data.createdBy;
    delete request.data.updatedBy;
    delete request.data.createdAt;
    delete request.data.updatedAt;
    delete request.data.__v;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  () => false // handle error here
);

export default axiosInstance;
