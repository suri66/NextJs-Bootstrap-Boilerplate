/**
 * @name httpService.js
 * @description Api communication methods
 * @author Surjeet Bhadauriya <surjeet@sixberries.com>
 * @version 0.0.0
 */

import axiosInstance from '../interceptor';

/**
 * @param {string} route <Route Name>
 * @return {object} <Returns promise (Axios Response)>
 */
function getAll(route) {
  return axiosInstance.get(`${route}`);
}

/**
 * @param {string} route <Route Name>
 * @param {object} params <An object like {id: 1}>
 * @return {object} <Returns promise (Axios Response)>
 */
function get(route, params) {
  return axiosInstance.get(route, { params });
}

/**
 * @param {string} route <Route Name>
 * @param {object} data <Post data object>
 * @return {object} <Returns promise (Axios Response)>
 */
function post(route, data) {
  return axiosInstance.post(`${route}`, data);
}

/**
 * @param {string} route <Route Name>
 * @param {object} data <Update data object>
 * @return {object} <Returns promise (Axios Response)>
 */
function patch(route, data) {
  return axiosInstance.patch(`${route}`, data);
}

/**
 * @param {string} route <Route Name>
 * @param {string} id <Create or update id. In case of create pass 'new' in id.>
 * @param {object} data <Create or Update object>
 * @return {object} <Returns promise (Axios Response)>
 */
function save(route, id, data) {
  if (id === 'new') {
    return post(route, data);
  }
  return patch(`${route}/${id}`, data);
}

/**
 * @param {string} route <Route Name>
 * @param {string} id <Delete id>
 * @return {object} <Returns promise (Axios Response)>
 */
function deleteOne(route, id) {
  if (id) {
    return axiosInstance.delete(`${route}/${id}`);
  }
  return axiosInstance.delete(`${route}`);
}

export { get, getAll, save, deleteOne };
