/**
 * @name utils.js
 * @description Common helpers functions
 * @author Surjeet Bhadauriya <surjeet@sixberries.com>
 * @version 0.0.0
 */

/**
 * sets the local storage item
 * @function setLocalStorageItem
 * @param {string} key - key to set
 * @param {string} value - value to set
 */
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * remove the local storage item
 * @function removeLocalStorageItem
 * @param {string} key - key to remove
 */
export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

/**
 * get the local storage item
 * @function getLocalStorageItem
 * @param {string} key - key to get
 */
export const getLocalStorageItem = (key) => localStorage.getItem(key);

/**
 * clear all local storage items
 * @function clearAppLocalStorageItems
 */
export const clearAppLocalStorageItems = () => {
  // update accoring to your requirements
  removeLocalStorageItem('token');
  removeLocalStorageItem('user');
};

/**
 * get the device
 * @function getNavigator
 * @returns {string} - returns the navigator.. desktop | mobile
 */
export const getNavigator = () => {
  if (
    typeof browser &&
    navigator.userAgent &&
    (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i))
  ) {
    return 'mobile'; // mobile
  }
  return 'desktop'; // desktop
};
