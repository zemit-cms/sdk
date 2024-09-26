import { AbstractModel } from '../AbstractModel';
import { PostModelInterface } from './interfaces/PostModelInterface';

export class PostModelAbstract extends AbstractModel implements PostModelInterface {
  id!: number;
  langId!: number;
  siteId!: number;
  pageId!: number;
  name!: string;
  description!: string;
  content!: string;
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