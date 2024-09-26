import { AbstractModel } from '../AbstractModel';
import { CategoryModelInterface } from './interfaces/CategoryModelInterface';

export class CategoryModelAbstract extends AbstractModel implements CategoryModelInterface {
  id!: number;
  siteId!: number;
  langId!: number;
  name!: string;
  index!: string;
  description!: string;
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