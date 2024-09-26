import { AbstractModel } from '../AbstractModel';
import { FlagModelInterface } from './interfaces/FlagModelInterface';

export class FlagModelAbstract extends AbstractModel implements FlagModelInterface {
  id!: number;
  siteId!: number;
  pageId!: number;
  langId!: number;
  label!: string;
  index!: string;
  value!: number;
  meta!: object;
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