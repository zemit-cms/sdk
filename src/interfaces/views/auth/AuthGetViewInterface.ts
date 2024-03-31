import {MessageInterface} from '../../MessageInterface';

export interface AuthGetViewInterface {
  jwt: string;
  refreshToken: string;
  loggedIn: boolean;
  loggedInAs: boolean;
  refreshed: boolean;
  validated: boolean;
  saved: boolean;
  hasSession: boolean;
  messages: Array<MessageInterface>;
  user: any; // @todo
  userAs: any; // @todo,
  permissionList: Array<any>; // @todo
  groupList: Array<any>; // @todo
  roleList: Array<any> | any; // @todo
  typeList: Array<any>; // @todo
}
