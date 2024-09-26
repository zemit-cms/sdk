import { AbstractModel } from '../AbstractModel';
import { GroupFeatureModelInterface } from './interfaces/GroupFeatureModelInterface';

export class GroupFeatureModelAbstract extends AbstractModel implements GroupFeatureModelInterface {
  id!: number;
  groupId!: number;
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