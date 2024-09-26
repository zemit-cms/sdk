import { AbstractModel } from '../AbstractModel';
import { EmailModelInterface } from './interfaces/EmailModelInterface';

export class EmailModelAbstract extends AbstractModel implements EmailModelInterface {
  id!: number;
  templateId!: number;
  uuid!: string;
  from!: string;
  to!: string;
  cc!: string;
  bcc!: string;
  readReceiptTo!: string;
  subject!: string;
  content!: string;
  meta!: string;
  viewPath!: string;
  sent!: number;
  sentAt!: string;
  sentBy!: number;
  sentAs!: number;
  deleted!: number;
  createdAt!: string;
  createdBy!: number;
  createdAs!: number;
  updatedAt!: string;
  updatedBy!: number;
  updatedAs!: number;
  deletedAt!: string;
  deletedBy!: number;
  deletedAs!: number;
  restoredAt!: string;
  restoredBy!: number;
  restoredAs!: number;
}