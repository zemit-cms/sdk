// In a file named `axios.d.ts` (or another appropriate file in your `types` directory)
import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    serviceInstance?: Service;
  }
}
