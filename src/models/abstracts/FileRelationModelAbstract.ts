import { AbstractModel } from '../AbstractModel';
import { FileRelationModelInterface } from './interfaces/FileRelationModelInterface';

export class FileRelationModelAbstract extends AbstractModel implements FileRelationModelInterface {
  id!: number;
  fileId!: number;
  category!: string;
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