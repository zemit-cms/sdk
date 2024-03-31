import { AbstractModel } from '../AbstractModel';
import { FeatureModelInterface } from './interfaces/FeatureModelInterface';

export class FeatureModelAbstract extends AbstractModel implements FeatureModelInterface {
  id!: number;
  index!: string;
  label!: string;
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