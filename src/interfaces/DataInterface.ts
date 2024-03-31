import {IdentityInterface} from "./IdentityInterface";

export interface DataInterface<T> {
  view: T;
  identity?: IdentityInterface;
  api: {
    app: string;
    core: string;
    name: string;
    phalcon: string;
    php: string;
    version: string;
    zemit: string;
  };
  hash: string;
  response: boolean;
  code: number;
  status: string;
  timestamp: string;
  dispatcher?: any;
  profiler?: any;
  request?: any;
  router?: any;
}
