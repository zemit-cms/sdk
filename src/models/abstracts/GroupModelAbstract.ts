import { AbstractModel } from '../AbstractModel';
import { GroupModelInterface } from './interfaces/GroupModelInterface';

export class GroupModelAbstract extends AbstractModel implements GroupModelInterface {
  id!: number;
  index!: string;
  label!: string;
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