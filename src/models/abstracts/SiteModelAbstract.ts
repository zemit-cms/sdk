import { AbstractModel } from '../AbstractModel';
import { SiteModelInterface } from './interfaces/SiteModelInterface';

export class SiteModelAbstract extends AbstractModel implements SiteModelInterface {
  id!: number;
  uuid!: string;
  name!: string;
  description!: string;
  icon!: string;
  color!: string;
  status!: string;
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