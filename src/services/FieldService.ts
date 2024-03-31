import { AbstractService } from './AbstractService';
import { FieldModel } from '../models/FieldModel';

export class FieldService extends AbstractService {
    modelUrl = 'field';
    model = FieldModel;
}