import { AbstractModel } from '../AbstractModel';
import { LogModelInterface } from './interfaces/LogModelInterface';

export class LogModelAbstract extends AbstractModel implements LogModelInterface {
  id!: number;
  level!: number;
  type!: string;
  name!: string;
  message!: string;
  context!: string;
  date!: string;
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