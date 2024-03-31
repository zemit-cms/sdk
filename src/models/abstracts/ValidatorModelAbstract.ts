import { AbstractModel } from '../AbstractModel';
import { ValidatorModelInterface } from './interfaces/ValidatorModelInterface';

export class ValidatorModelAbstract extends AbstractModel implements ValidatorModelInterface {
  id!: number;
  fieldId!: number;
  name!: string;
  index!: string;
  type!: string;
  params!: object;
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