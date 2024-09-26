import { AbstractModel } from '../AbstractModel';
import { TableModelInterface } from './interfaces/TableModelInterface';

export class TableModelAbstract extends AbstractModel implements TableModelInterface {
  id!: number;
  uuid!: string;
  langId!: number;
  workspaceId!: number;
  name!: string;
  description!: string;
  icon!: string;
  color!: string;
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