import { AbstractModel } from '../AbstractModel';
import { TemplateModelInterface } from './interfaces/TemplateModelInterface';

export class TemplateModelAbstract extends AbstractModel implements TemplateModelInterface {
  id!: number;
  index!: string;
  label!: string;
  subject!: string;
  content!: string;
  meta!: string;
  deleted!: string;
  createdAt!: string;
  createdBy!: number;
  createdAs!: number;
  updatedAt!: string;
  updatedBy!: number;
  updatedAs!: number;
  deletedAt!: string;
  deletedBy!: number;
  deletedAs!: number;
  restoredAt!: string;
  restoredBy!: number;
  restoredAs!: number;
}