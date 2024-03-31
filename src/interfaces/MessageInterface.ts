export interface MessageInterface {
  code: number;
  field: string | Array<string>;
  message: string;
  metaData: Array<any>;
  type: string;
}
