import axios from 'axios';

const apiService = {
  get: async (url: string, params: Record<string, any>) =>
    axios({
      method: 'get',
      url,
      params,
    })
    .then((response) => response.data)
    .catch((err) => console.log(err))
};

export default apiService;
