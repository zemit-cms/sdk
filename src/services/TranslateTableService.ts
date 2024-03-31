import { AbstractService } from './AbstractService';
import { TranslateTableModel } from '../models/TranslateTableModel';

export class TranslateTableService extends AbstractService {
    modelUrl = 'translate-table';
    model = TranslateTableModel;
}