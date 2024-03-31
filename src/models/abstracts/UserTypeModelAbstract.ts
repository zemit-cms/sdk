import { AbstractModel } from '../AbstractModel';
import { UserTypeModelInterface } from './interfaces/UserTypeModelInterface';

export class UserTypeModelAbstract extends AbstractModel implements UserTypeModelInterface {
  id!: number;
  userId!: number;
  typeId!: number;
  position!: number;
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