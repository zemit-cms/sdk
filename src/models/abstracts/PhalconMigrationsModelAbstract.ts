import { AbstractModel } from '../AbstractModel';
import { PhalconMigrationsModelInterface } from './interfaces/PhalconMigrationsModelInterface';

export class PhalconMigrationsModelAbstract extends AbstractModel implements PhalconMigrationsModelInterface {
  id!: number;
  version!: string;
  startTime!: number;
  endTime!: number;
}