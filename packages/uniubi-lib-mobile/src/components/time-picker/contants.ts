import dayjs from 'dayjs';

export const OPTIONS = [
  Array.from({ length: 24 }, (_, i) => {
    return { label: dayjs().hour(i).format('HH'), value: i };
  }),
  Array.from({ length: 60 }, (_, i) => {
    return { label: dayjs().minute(i).format('mm'), value: i };
  }),
  Array.from({ length: 60 }, (_, i) => {
    return { label: dayjs().second(i).format('ss'), value: i };
  }),
];
