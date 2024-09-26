import { AbstractModel } from '../AbstractModel';
import { GroupTypeModelInterface } from './interfaces/GroupTypeModelInterface';

export class GroupTypeModelAbstract extends AbstractModel implements GroupTypeModelInterface {
  id!: number;
  groupId!: number;
  typeId!: number;
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