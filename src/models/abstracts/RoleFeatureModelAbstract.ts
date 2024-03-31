import { AbstractModel } from '../AbstractModel';
import { RoleFeatureModelInterface } from './interfaces/RoleFeatureModelInterface';

export class RoleFeatureModelAbstract extends AbstractModel implements RoleFeatureModelInterface {
  id!: number;
  roleId!: number;
  featureId!: number;
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