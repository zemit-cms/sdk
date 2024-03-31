import { AbstractService } from './AbstractService';
import { TranslateModel } from '../models/TranslateModel';

export class TranslateService extends AbstractService {
    modelUrl = 'translate';
    model = TranslateModel;
}