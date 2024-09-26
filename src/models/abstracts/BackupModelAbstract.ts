import { AbstractModel } from '../AbstractModel';
import { BackupModelInterface } from './interfaces/BackupModelInterface';

export class BackupModelAbstract extends AbstractModel implements BackupModelInterface {
  id!: number;
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