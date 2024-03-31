import { AbstractModel } from '../AbstractModel';
import { EmailFileModelInterface } from './interfaces/EmailFileModelInterface';

export class EmailFileModelAbstract extends AbstractModel implements EmailFileModelInterface {
  id!: number;
  emailId!: number;
  fileId!: number;
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