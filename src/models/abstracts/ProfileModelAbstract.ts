import { AbstractModel } from '../AbstractModel';
import { ProfileModelInterface } from './interfaces/ProfileModelInterface';

export class ProfileModelAbstract extends AbstractModel implements ProfileModelInterface {
  id!: number;
  userId!: number;
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
}