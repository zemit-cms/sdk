import { AbstractModel } from '../AbstractModel';
import { TypeModelInterface } from './interfaces/TypeModelInterface';

export class TypeModelAbstract extends AbstractModel implements TypeModelInterface {
  id!: number;
  index!: string;
  label!: string;
  position!: number;
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
  restoredAs!: number;
}