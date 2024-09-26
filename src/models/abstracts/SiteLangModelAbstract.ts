import { AbstractModel } from '../AbstractModel';
import { SiteLangModelInterface } from './interfaces/SiteLangModelInterface';

export class SiteLangModelAbstract extends AbstractModel implements SiteLangModelInterface {
  id!: number;
  siteId!: number;
  langId!: number;
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
  deletedCopy1!: number;
}