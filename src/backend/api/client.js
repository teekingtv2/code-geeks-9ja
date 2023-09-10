import axios from 'axios';

export const axiosInstance = () =>
  axios.create({
    baseURL: '/api',
  });

axiosInstance().interceptors.response.use((res) => {
  if (res.status === 404) {
    window.location.href = '/dashboard/login';
  }
});
