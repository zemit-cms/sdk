import { AbstractService } from './AbstractService';
import { TableModel } from '../models/TableModel';

export class TableService extends AbstractService {
    modelUrl = 'table';
    model = TableModel;
}