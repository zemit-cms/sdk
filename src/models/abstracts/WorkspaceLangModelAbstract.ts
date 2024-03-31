import { AbstractModel } from '../AbstractModel';
import { WorkspaceLangModelInterface } from './interfaces/WorkspaceLangModelInterface';

export class WorkspaceLangModelAbstract extends AbstractModel implements WorkspaceLangModelInterface {
  id!: number;
  workspaceId!: number;
  langId!: number;
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
  deletedCopy1!: number;
}