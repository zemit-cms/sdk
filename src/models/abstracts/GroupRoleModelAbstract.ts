import { AbstractModel } from '../AbstractModel';
import { GroupRoleModelInterface } from './interfaces/GroupRoleModelInterface';

export class GroupRoleModelAbstract extends AbstractModel implements GroupRoleModelInterface {
  id!: number;
  groupId!: number;
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