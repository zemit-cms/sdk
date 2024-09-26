import { AbstractModel } from '../AbstractModel';
import { PostCategoryModelInterface } from './interfaces/PostCategoryModelInterface';

export class PostCategoryModelAbstract extends AbstractModel implements PostCategoryModelInterface {
  id!: number;
  postId!: number;
  categoryId!: number;
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