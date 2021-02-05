import axios from 'axios';

const getDataBody = (config) => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    // remove & last
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }
  return data;
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Request]',
        'color: blue; font-weight: bold',
        config,
      );
    }

    // Do something before request is sent
    return {...config, data};
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response]',
        'color: #248c1d; font-weight: bold',
        response,
      );
    }
    return response;
  },
  (error) => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response Error]',
        'color: red; font-weight: bold',
        error,
      );
    }
    return Promise.reject(error);
  },
);
// Domain for all requests
// axios.defaults.baseURL = "https://thachpham.com/wp-json/wp/v2/";
axios.defaults.baseURL =
  'http://192.168.1.55/baoan/dientutuonglai_new/api.php/';
// Defines the max size of the http response content in bytes allowed

export default class HttpService {
  static generateHeader(headers?, newToken?) {
    headers = headers !== null ? headers : {};
    const token = newToken ? newToken : null;
    if (headers.toLowerCase() == 'urlencoded') {
      // let body = 'username=app&password=IMS@111',
      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      };
      // const originHeader = {
      //     // 'Accept': 'application/json',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     // 'Authorization': `Bearer ${token}`,
      // };
      return {...options};
    }
  }

  static async get(url, config?) {
    try {
      const configHeaders = config && config.headers ? config.headers : null;
      return await axios.get(url, {
        headers: this.generateHeader(configHeaders, null),
      });
    } catch (error) {
      throw error.response;
    }
  }

  static async post(url, body, config?) {
    try {
      const configHeaders =
        config.toLowerCase() == 'urlencoded' ? 'urlencoded' : 'json';
      return await axios
        .post(url, body, {
          headers: this.generateHeader(configHeaders, null),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  static async put(url, data, config?) {
    try {
      const configHeaders = config && config.headers ? config.headers : null;
      return await axios
        .put(url, data, {
          headers: this.generateHeader(configHeaders, null),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  static async patch(url, data, config?) {
    try {
      const configHeaders = config && config.headers ? config.headers : null;
      return await axios
        .patch(url, data, {
          headers: this.generateHeader(configHeaders, null),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  static async delete(url, config?) {
    try {
      const configHeaders = config && config.headers ? config.headers : null;
      return await axios
        .delete(url, {
          headers: this.generateHeader(configHeaders, null),
        })
        .then((response) => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
