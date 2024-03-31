import { AbstractModel } from '../AbstractModel';
import { SessionModelInterface } from './interfaces/SessionModelInterface';

export class SessionModelAbstract extends AbstractModel implements SessionModelInterface {
  id!: number;
  userId!: number;
  asUserId!: number;
  key!: string;
  token!: string;
  jwt!: string;
  meta!: string;
  date!: string;
  deleted!: string;
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