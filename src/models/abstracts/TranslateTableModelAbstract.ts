import { AbstractModel } from '../AbstractModel';
import { TranslateTableModelInterface } from './interfaces/TranslateTableModelInterface';

export class TranslateTableModelAbstract extends AbstractModel implements TranslateTableModelInterface {
  id!: number;
  table!: string;
  leftId!: number;
  rightId!: number;
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
  deletedCopy1!: number;
}