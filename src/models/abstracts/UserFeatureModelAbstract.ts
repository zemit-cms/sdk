import { AbstractModel } from '../AbstractModel';
import { UserFeatureModelInterface } from './interfaces/UserFeatureModelInterface';

export class UserFeatureModelAbstract extends AbstractModel implements UserFeatureModelInterface {
  id!: number;
  userId!: number;
  featureId!: number;
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