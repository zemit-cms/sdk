import { AbstractModel } from '../AbstractModel';
import { MenuModelInterface } from './interfaces/MenuModelInterface';

export class MenuModelAbstract extends AbstractModel implements MenuModelInterface {
  id!: number;
  name!: string;
  index!: string;
  parentId!: number;
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
}