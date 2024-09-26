import { AbstractModel } from '../AbstractModel';
import { RecordModelInterface } from './interfaces/RecordModelInterface';

export class RecordModelAbstract extends AbstractModel implements RecordModelInterface {
  id!: number;
  workspaceId!: number;
  tableId!: number;
  uuid!: string;
  name!: string;
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