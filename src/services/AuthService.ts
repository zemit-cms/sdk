import {AxiosResponse} from 'axios'
import {Service} from '../core'
import {
  DataInterface,
  AuthGetViewInterface,
  AuthLoginViewInterface,
  AuthLogoutViewInterface,
  AuthRegisterViewInterface,
  AuthRefreshViewInterface,
} from '../interfaces'

export class AuthService extends Service
{
  modelUrl = '/auth'
  baseUrl = '/api'
  
  // auth endpoints
  endpointList: { [key: string]: string } = {
    get: '/get',
    logout: '/logout',
    login: '/login',
    register: '/register',
    refresh: '/refresh',
  }
  
  // do not send a refresh request on unauthorized
  refreshOnUnauthorized = false
  
  getGetUrl = () => this.getUrl('get')
  getLoginUrl = () => this.getUrl('login')
  getLogoutUrl = () => this.getUrl('logout')
  getRegisterUrl = () => this.getUrl('register')
  getRefreshUrl = () => this.getUrl('refresh')
  
  get = (data = {}): Promise<AxiosResponse<DataInterface<AuthGetViewInterface>>> => this.handleRequest(this.getGetUrl(), data)
  login = (data = {}): Promise<AxiosResponse<DataInterface<AuthLoginViewInterface>>> => this.handleRequest(this.getLoginUrl(), data)
  logout = (data = {}): Promise<AxiosResponse<DataInterface<AuthLogoutViewInterface>>> => this.handleRequest(this.getLogoutUrl(), data)
  register = (data = {}): Promise<AxiosResponse<DataInterface<AuthRegisterViewInterface>>> => this.handleRequest(this.getRegisterUrl(), data)
  refresh = (data = {}): Promise<AxiosResponse<DataInterface<AuthRefreshViewInterface>>> => this.handleRequest(this.getRefreshUrl(), data)
}
