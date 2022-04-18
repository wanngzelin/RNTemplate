import { extend, ResponseError } from 'umi-request';

//错误处理
const errorHandler = (error: ResponseError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message);
  }
}

const request = extend({
  // prefix:'',
  timeout: 1000,
  errorHandler
})


export default request