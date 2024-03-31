import { AbstractModel } from '../AbstractModel';
import { JobModelInterface } from './interfaces/JobModelInterface';

export class JobModelAbstract extends AbstractModel implements JobModelInterface {
  id!: number;
  uuid!: string;
  label!: string;
  task!: string;
  action!: string;
  params!: object;
  thread!: string;
  priority!: number;
  at!: string;
  status!: string;
  result!: object;
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