import {GetViewInterface} from "../GetViewInterface";
import {MessageInterface} from "../../MessageInterface";

export interface AuthRegisterViewInterface extends GetViewInterface {
  loggedIn: boolean;
  loggedInAs: boolean;
  messages: Array<MessageInterface>;
  saved: boolean;
}
