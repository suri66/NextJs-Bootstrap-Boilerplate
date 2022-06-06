/**
 * @name dates.utils.js
 * @description Dates helpers
 * @author Surjeet Bhadauriya <surjeet@sixberries.com>
 * @version 0.0.0
 */

import dayjs from 'dayjs';

/**
 * returns the formatted date
 * @function formatDate
 * @param {object|string} date - date object or date ISO string
 * @param {string} format - format to return
 */
export function formatDate(date, format = 'DD/MM/YYYY') {
  return dayjs(new Date(date)).format(format);
}
