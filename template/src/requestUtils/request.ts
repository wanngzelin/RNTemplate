//请求工具库
/**
 * 使用可参照https://www.npmjs.com/package/umi-request
 */
import {extend, ResponseError} from 'umi-request';
import {Storage} from '@/utils';
import {baseUrl} from '@/config';

const codeMessage: Record<string, string> = {
  '200': '服务器成功返回请求的数据。',
  '201': '新建或修改数据成功。',
  '202': '一个请求已经进入后台排队（异步任务）。',
  '204': '删除数据成功。',
  '400': '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  '401': '用户没有权限（令牌、用户名、密码错误）。',
  '403': '用户得到授权，但是访问是被禁止的。',
  '404': '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  '406': '请求的格式不可得。',
  '410': '请求的资源被永久删除，且不会再得到的。',
  '422': '当创建一个对象时，发生一个验证错误。',
  '500': '服务器发生错误，请检查服务器。',
  '502': '网关错误。',
  '503': '服务不可用，服务器暂时过载或维护。',
  '504': '网关超时。',
};
/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const {response} = error;
  console.log(error);

  if (response && response.status) {
    const {status, url} = response;
    console.log(
      `请求错误 ${status}: ${url},message:${codeMessage[status + '']}`,
    );
  } else if (!response) {
    console.log('您的网络发生异常，无法连接服务器');
  }
  return response;
};

const request = extend({
  prefix: baseUrl,
  timeout: 1000 * 60,
  errorHandler,
});

request.use(
  async (ctx, next) => {
    const {req} = ctx;
    const {options} = req;
    const Authorization = Storage.getString('Authorization');
    ctx.req.options = {
      ...options,
      headers: {
        ...options.headers,
        DeviceType: 'APP',
        Authorization: Authorization ?? '',
      },
    };
    await next();
  },
  {global: true},
);

request.interceptors.response.use(async (res: Response) => {
  const resopnse = await res.clone().json();
  if (res.ok && !resopnse.success) {
    console.log(resopnse?.message || '网络故障');
    // 如果是登录过期，清除缓存，重载app
    if (resopnse?.status === 407) {
      Storage.clearAll();
    }
  }
  return res;
});

export {request};
