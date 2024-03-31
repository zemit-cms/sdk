import { AbstractModel } from '../AbstractModel';
import { UserRoleModelInterface } from './interfaces/UserRoleModelInterface';

export class UserRoleModelAbstract extends AbstractModel implements UserRoleModelInterface {
  id!: number;
  userId!: number;
  roleId!: number;
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