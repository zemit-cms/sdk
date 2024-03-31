import { AbstractService } from './AbstractService';
import { DataModel } from '../models/DataModel';

export class DataService extends AbstractService {
    modelUrl = 'data';
    model = DataModel;
}