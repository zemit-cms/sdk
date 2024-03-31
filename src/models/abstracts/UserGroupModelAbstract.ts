import { AbstractModel } from '../AbstractModel';
import { UserGroupModelInterface } from './interfaces/UserGroupModelInterface';

export class UserGroupModelAbstract extends AbstractModel implements UserGroupModelInterface {
  id!: number;
  userId!: number;
  groupId!: number;
  position!: number;
  deleted!: string;
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
  restoredAs!: number;
}