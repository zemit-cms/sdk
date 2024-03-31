import { AbstractModel } from '../AbstractModel';
import { PageModelInterface } from './interfaces/PageModelInterface';

export class PageModelAbstract extends AbstractModel implements PageModelInterface {
  id!: number;
  langId!: number;
  siteId!: number;
  name!: string;
  description!: string;
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