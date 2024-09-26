import { AbstractModel } from '../AbstractModel';
import { SettingModelInterface } from './interfaces/SettingModelInterface';

export class SettingModelAbstract extends AbstractModel implements SettingModelInterface {
  id!: number;
  category!: string;
  index!: string;
  label!: string;
  value!: string;
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