import { AbstractModel } from '../AbstractModel';
import { LangModelInterface } from './interfaces/LangModelInterface';

export class LangModelAbstract extends AbstractModel implements LangModelInterface {
  id!: number;
  label!: string;
  code!: string;
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