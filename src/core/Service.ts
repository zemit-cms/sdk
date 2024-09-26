import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import {Identity} from './Identity'
import {Model} from './Model'
import {instanceToPlain, plainToInstance} from 'class-transformer'

import {DataInterface} from '../interfaces'
import {GetViewInterface} from '../interfaces'

export abstract class ServiceConfig
{
  model = Model
  baseUrl = ''
  modelUrl = ''
  refreshOnUnauthorized = true
  requestConfig?: AxiosRequestConfig
}

export class Service extends ServiceConfig
{
  http!: AxiosInstance
  
  endpoints: { [key: string]: string } = {
    // get: '/get',
    // getWith: '/get-with',
    // getAll: '/get-all',
    // getAllWith: '/get-all-with',
    find: '/find',
    findWith: '/find-with',
    findFirst: '/find-first',
    findFirstWith: '/find-first-with',
    import: '/import',
    export: '/export',
    count: '/count',
    new: '/new',
    validate: '/validate',
    save: '/save',
    create: '/save',
    update: '/save',
    delete: '/delete',
    restore: '/restore',
    logout: '/logout',
    login: '/login',
    upload: '/upload',
  }
  
  constructor(opts: Partial<ServiceConfig> = {})
  {
    super()
    Object.assign(this, opts)
  }
  
  static getInstance<T, K extends keyof ServiceConfig>(this: new () => T, opts: Partial<ServiceConfig> = {}): T
  {
    const instance = new this()
    
    for (const key in opts) {
      if (opts.hasOwnProperty(key)) {
        const keyTyped = key as K;
        (instance as any)[key] = opts[keyTyped]
      }
    }
    
    return instance
  }
  
  getEndpointUrl = (endpoint: string): string => this.endpoints[endpoint] || endpoint
  setEndpointUrl = (endpoint: string, url: string): string =>
    (this.endpoints[endpoint] = url)
  
  getBaseUrl = () => this.baseUrl
  setBaseUrl = (url: string) => (this.baseUrl = url)
  
  setModelUrl = (url: string) => (this.modelUrl = url)
  getModelUrl = () => this.modelUrl
  
  /**
   * Build an endpoint url using the baseUrl + modelUrl + endpointUrl
   * @param endpoint
   */
  getUrl(endpoint: string)
  {
    return [this.getBaseUrl(), this.getModelUrl(), this.getEndpointUrl(endpoint)]
      .filter(Boolean)
      .join('/')
      .replace(/\/+/g, '/')
  }
  
  /**
   * Endpoint URL getters
   * @return string
   */
  // getGetAllUrl = () => this.getUrl('getAll')
  // getGetAllWithUrl = () => this.getUrl('getAllWith')
  // getGetUrl = () => this.getUrl('get')
  // getGetWithUrl = () => this.getUrl('getWith')
  getFindUrl = () => this.getUrl('find')
  getFindWithUrl = () => this.getUrl('findWith')
  getFindFirstUrl = () => this.getUrl('findFirst')
  getFindFirstWithUrl = () => this.getUrl('findFirstWith')
  getImportUrl = () => this.getUrl('import')
  getExportUrl = () => this.getUrl('export')
  getCountUrl = () => this.getUrl('count')
  getNewUrl = () => this.getUrl('new')
  getValidateUrl = () => this.getUrl('validate')
  getCreateUrl = () => this.getUrl('create')
  getUpdateUrl = () => this.getUrl('update')
  getSaveUrl = () => this.getUrl('save')
  getDeleteUrl = () => this.getUrl('delete')
  getRestoreUrl = () => this.getUrl('restore')
  getLogoutUrl = () => this.getUrl('logout')
  getLoginUrl = () => this.getUrl('login')
  getUploadUrl = () => this.getUrl('upload')
  
  // getAll = (data = {}, config = {}) => this.handleRequest(this.getGetAllUrl(), data, config)
  // getAllWith = (data = {}, config = {}) => this.handleRequest(this.getGetAllWithUrl(), data, config)
  // get = (data = {}, config = {}) => this.handleRequest(this.getGetUrl(), data, config)
  // getWith = (data = {}, config = {}) => this.handleRequest(this.getGetWithUrl(), data, config)
  find = (data = {}, config = {}) => this.handleRequest(this.getFindUrl(), data, config)
  findWith = (data = {}, config = {}) => this.handleRequest(this.getFindWithUrl(), data, config)
  findFirst = (data = {}, config = {}) => this.handleRequest(this.getFindFirstWithUrl(), data, config)
  findFirstWith = (data = {}, config = {}) => this.handleRequest(this.getFindFirstWithUrl(), data, config)
  import = (data = {}, config = {}) => this.handleRequest(this.getImportUrl(), data, config)
  export = (data = {}, config = {}) => this.handleRequest(this.getExportUrl(), data, config)
  count = (data = {}, config = {}) => this.handleRequest(this.getCountUrl(), data, config)
  new = (data = {}, config = {}) => this.handleRequest(this.getNewUrl(), data, config)
  validate = (data = {}, config = {}) => this.handleRequest(this.getValidateUrl(), data, config)
  create = (data = {}, config = {}) => this.handleRequest(this.getCreateUrl(), data, config)
  update = (data = {}, config = {}) => this.handleRequest(this.getUpdateUrl(), data, config)
  save = (data = {}, config = {}) => this.handleRequest(this.getSaveUrl(), data, config)
  delete = (data = {}, config = {}) => this.handleRequest(this.getDeleteUrl(), data, config)
  restore = (data = {}, config = {}) => this.handleRequest(this.getRestoreUrl(), data, config)
  upload = (data = {}, config = {}) => this.handleRequest(this.getUploadUrl(), data, config)
  
  async handleRequest<D = any, R = any>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D> = {},
    success?: CallableFunction,
    error?: CallableFunction,
    complete?: CallableFunction,
  ): Promise<AxiosResponse<DataInterface<R>>>
  {
    /**
     * Create default Axios Request
     * Add custom interceptors
     */
    this.http = axios.create(this.requestConfig)
    this.http.interceptors.response.use(this.responseInterceptor, this.rejectedResponseInterceptor)
    this.http.interceptors.request.use(this.requestInterceptor)
    
    return this.prepareUploads(data).then((data) => {
      this.prepareRequestConfig(url, data, config)
      this.beforeRequest(config)
      
      return new Promise((resolve, reject) =>
        this.http(config)
          .then((response: AxiosResponse<any>) => this.success(response, resolve, reject, success))
          .catch((reason: AxiosError<any>) => this.error(reason, resolve, reject, error))
          .finally(() => this.complete(resolve, reject, complete)),
      )
    })
  }
  
  /**
   * Prepare request config
   */
  prepareRequestConfig<D = any>(url: string, data?: D | any, config: AxiosRequestConfig<D> = {}): void
  {
    // Set default method to post
    if (!config.method) {
      config.method = 'post'
    }
    
    // Force url
    if (!config.url) {
      config.url = url
    }
    
    // Force data
    if (!config.data) {
      config.data = data
    }
  }
  
  uploadFile(file: File, category: string)
  {
    const formData = new FormData()
    formData.append('file', file)
    return this.handleRequest(this.getBaseUrl() + '/file/upload/' + category, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
  
  prepareUploads<D = any>(model: D | any): Promise<any>
  {
    return new Promise((resolve, _reject) => {
      if (!(model instanceof Model)) {
        resolve(model)
      }
      
      const data = instanceToPlain(model)
      const uploadMap: any = model.uploadMap()
      const promises: Array<Promise<any>> = []
      Object.keys(data).forEach((key) => {
        if (uploadMap[key]) {
          if (data[key] instanceof File) {
            promises.push(
              this.uploadFile(data[key], uploadMap[key].category).then((response) => {
                data[uploadMap[key].key] = response.data.view[0].file.id
                return response
              }),
            )
          }
          else if (data[key] === null) {
            data[uploadMap[key].key] = null
          }
          delete data[key]
        }
      })
      
      Promise.all(promises).then(() => {
        resolve(data)
      })
    })
  }
  
  /**
   * Process parameters before Axios Request
   */
  beforeRequest<D = any>(config: AxiosRequestConfig<D | any>)
  {
    // prepare model
    if (config.data instanceof Model) {
      config.data = instanceToPlain(config.data)
    }
    
    // prepare array of models
    if (Array.isArray(config.data)) {
      const newData: Array<any> = []
      config.data.forEach((value, index) => {
        newData[index] = value instanceof Model ? instanceToPlain(value) : value
      })
      config.data = newData
    }
  }
  
  /**
   * Request Success Callback
   */
  success = (
    response: AxiosResponse<DataInterface<any>>,
    resolve: CallableFunction,
    _reject: CallableFunction,
    callable?: CallableFunction,
  ) => {
    if (response?.data?.view?.data) {
      const data = response.data.view.data
      response.data.view.data = Array.isArray(data)
        ? data.map((item: any) => plainToInstance(this.model, item))
        : plainToInstance(this.model, data);
    }
    callable && callable(response)
    resolve(response)
  }
  
  /**
   * Request Error Callback
   */
  error = (
    reason: AxiosError<any> | AxiosResponse<any>,
    _resolve: CallableFunction,
    reject: CallableFunction,
    callable?: CallableFunction,
  ) => {
    callable && callable(reason)
    reject(reason)
  }
  
  /**
   * Request Complete Callback
   */
  complete = (_resolve: CallableFunction, _reject: CallableFunction, callable?: CallableFunction) => {
    callable && callable()
  }
  
  /**
   * Axios Success Response
   * Parse Zemit Data Response and reject the request if we don't have valid response
   * - @todo Zemit should return a 401 itself
   */
  responseInterceptor = (response: AxiosResponse<DataInterface<GetViewInterface>>) => {
    switch (response?.data?.response) {
      case undefined:
      case null:
      case true:
        return response
    }
    return Promise
      .reject
      (new AxiosError(
        response.statusText,
        response.status.toString(),
        response.config,
        response.request,
        response,
      ))
  }
  
  /**
   * Axios Rejected Response
   * If 401, the JWT may be expired or invalid, so we try to refresh JWT once
   */
  retry = false
  rejectedResponseInterceptor = async (reject: AxiosError) => {
    if (this.refreshOnUnauthorized && reject.response) {
      if (reject.response.status === 401 && !this.retry) {
        this.retry = true
        // await Identity.refreshPromise();
        if (Identity.isLoggedIn()) {
          if (reject.config) {
            return this.http(reject.config)
          }
        }
      }
    }
    return Promise.reject(reject)
  }
  
  /**
   * Adding X-Authorization JWT header
   * Refresh the JWT token if expired
   */
  requestInterceptor = async (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      let jwt = Identity.getIdentity()?.jwt
      if (jwt) {
        if (this.refreshOnUnauthorized) {
          // const token = jose.decodeJwt(jwt);
          // const exp = token.exp || false;
          // if (token && exp && exp <= moment().unix()) {
          //   await Identity.refreshPromise();
          //   jwt = Identity.getIdentity()?.jwt;
          // }
        }
        config.headers['X-Authorization'] = `Bearer ${jwt}`
      }
    }
    return config
  }
}
