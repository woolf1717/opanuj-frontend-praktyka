import axios from 'axios';

// Add a request interceptor

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const configWithModifications = { ...config, data: new Date().getTime() };

  return configWithModifications;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const coutAwaitTimeInMS = new Date().getTime() - response.config.data;
  console.log(coutAwaitTimeInMS);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
