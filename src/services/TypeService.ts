import { AbstractService } from './AbstractService';
import { TypeModel } from '../models/TypeModel';

export class TypeService extends AbstractService {
    modelUrl = 'type';
    model = TypeModel;
}