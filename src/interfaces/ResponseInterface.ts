import {DataInterface} from '../interfaces/DataInterface'
import {AxiosResponse} from 'axios'

export interface ResponseInterface<T, D = DataInterface<T>> extends AxiosResponse<D> {

}
