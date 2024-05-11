/**
 * 请求工具基类,支持传入泛型累，可提示返回数据类型
 * 默认响应为ResponseData泛型，如后端返回格式不一致，可修改对应基类
 */
import {RequestOptionsInit} from 'umi-request';
import {request} from './request';
interface Page<T> {
  hasNextPage: boolean;
  hasPrevious: boolean;
  list: T[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

interface ResponseData<T = any> {
  data: T;
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
}

interface HTTPConfig {
  url: string;
  opts?: RequestOptionsInit;
}

type List<T = any[]> = ResponseData<T[]>;
type ResPage<T = any> = ResponseData<Page<T>>;

export class ApiService {
  static async get<T = any>(
    url: string,
    params?: RequestOptionsInit['params'],
  ): Promise<ResponseData<T>> {
    return await request.get<ResponseData<T>>(url, {params});
  }

  static async post<T = any>(
    url: string,
    data?: RequestOptionsInit['data'],
  ): Promise<ResponseData<T>> {
    return await request.post<ResponseData<T>>(url, {data});
  }

  static async postQuery<T = any>(
    url: string,
    params?: RequestOptionsInit['params'],
  ): Promise<ResponseData<T>> {
    return await request.post<ResponseData<T>>(url, {params});
  }

  static async delete<T = any>({
    url,
    opts,
  }: HTTPConfig): Promise<ResponseData<T>> {
    return await request.delete<ResponseData<T>>(url, opts);
  }

  static async page<T = any>({url, opts}: HTTPConfig): Promise<ResPage<T>> {
    return await request.get<ResPage<T>>(url, opts);
  }

  static async list<T = any>({url, opts}: HTTPConfig): Promise<List<T>> {
    return await request.get<List<T>>(url, opts);
  }
}
