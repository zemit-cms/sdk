import { AbstractService } from './AbstractService';
import { TranslateFieldModel } from '../models/TranslateFieldModel';

export class TranslateFieldService extends AbstractService {
    modelUrl = 'translate-field';
    model = TranslateFieldModel;
}