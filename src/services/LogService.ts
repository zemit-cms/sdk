import { AbstractService } from './AbstractService';
import { LogModel } from '../models/LogModel';

export class LogService extends AbstractService {
    modelUrl = 'log';
    model = LogModel;
}