import { AbstractModel } from '../AbstractModel';
import { DataModelInterface } from './interfaces/DataModelInterface';

export class DataModelAbstract extends AbstractModel implements DataModelInterface {
  id!: number;
  siteId!: number;
  tableId!: number;
  fieldId!: number;
  value!: string;
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
}