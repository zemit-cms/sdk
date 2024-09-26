import { AbstractService } from './AbstractService';
import { RecordModel } from '../models/RecordModel';

export class RecordService extends AbstractService {
    modelUrl = 'record';
    model = RecordModel;
}