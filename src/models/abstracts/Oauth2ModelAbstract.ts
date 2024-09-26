import { AbstractModel } from '../AbstractModel';
import { Oauth2ModelInterface } from './interfaces/Oauth2ModelInterface';

export class Oauth2ModelAbstract extends AbstractModel implements Oauth2ModelInterface {
  id!: number;
  userId!: number;
  provider!: string;
  providerUuid!: string;
  accessToken!: string;
  refreshToken!: string;
  email!: string;
  name!: string;
  firstName!: string;
  lastName!: string;
  meta!: object;
  deleted!: number;
  createdAt!: string;
  createdBy!: number;
  createdAs!: number;
  updatedAt!: string;
  updatedBy!: number;
  updatedAs!: number;
  deletedAt!: string;
  deletedAs!: number;
  deletedBy!: number;
  restoredAt!: string;
  restoredBy!: number;
}