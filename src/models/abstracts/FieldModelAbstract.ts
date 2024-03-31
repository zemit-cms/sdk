import { AbstractModel } from '../AbstractModel';
import { FieldModelInterface } from './interfaces/FieldModelInterface';

export class FieldModelAbstract extends AbstractModel implements FieldModelInterface {
  id!: number;
  siteId!: number;
  tableId!: number;
  name!: string;
  index!: string;
  type!: string;
  validationRegex!: string;
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