import dayjs from 'dayjs';

export function formatDate(date, format = 'DD/MM/YYYY') {
  return dayjs(new Date(date)).format(format);
}
