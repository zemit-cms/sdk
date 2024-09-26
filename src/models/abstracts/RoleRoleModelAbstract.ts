import { AbstractModel } from '../AbstractModel';
import { RoleRoleModelInterface } from './interfaces/RoleRoleModelInterface';

export class RoleRoleModelAbstract extends AbstractModel implements RoleRoleModelInterface {
  id!: number;
  parentId!: number;
  childId!: number;
  position!: number;
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
  restoredAs!: number;
}