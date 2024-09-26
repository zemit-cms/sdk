import { AbstractModel } from '../AbstractModel';
import { TranslateModelInterface } from './interfaces/TranslateModelInterface';

export class TranslateModelAbstract extends AbstractModel implements TranslateModelInterface {
  id!: number;
  langId!: number;
  siteId!: number;
  pageId!: number;
  postId!: number;
  categoryId!: number;
  key!: string;
  value!: string;
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