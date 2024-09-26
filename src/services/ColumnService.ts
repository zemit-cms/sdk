import { AbstractService } from './AbstractService';
import { ColumnModel } from '../models/ColumnModel';

export class ColumnService extends AbstractService {
    modelUrl = 'column';
    model = ColumnModel;
}