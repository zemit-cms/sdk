import { AbstractModel } from '../AbstractModel';
import { FileModelInterface } from './interfaces/FileModelInterface';

export class FileModelAbstract extends AbstractModel implements FileModelInterface {
  id!: number;
  userId!: number;
  category!: string;
  key!: string;
  path!: string;
  type!: string;
  typeReal!: string;
  extension!: string;
  name!: string;
  nameTemp!: string;
  size!: string;
  error!: string;
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