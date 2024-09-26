import { AbstractModel } from '../AbstractModel';
import { AuditDetailModelInterface } from './interfaces/AuditDetailModelInterface';

export class AuditDetailModelAbstract extends AbstractModel implements AuditDetailModelInterface {
  id!: number;
  auditId!: number;
  model!: string;
  table!: string;
  primary!: number;
  event!: string;
  column!: string;
  map!: string;
  before!: string;
  after!: string;
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