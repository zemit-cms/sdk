import {GetViewInterface} from "../GetViewInterface";
import {MessageInterface} from "../../MessageInterface";

export interface AuthLoginViewInterface extends GetViewInterface {
  loggedIn: boolean;
  loggedInAs: boolean;
  messages: Array<MessageInterface>;
  saved: boolean;
}
