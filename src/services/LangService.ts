import { AbstractService } from './AbstractService';
import { LangModel } from '../models/LangModel';

export class LangService extends AbstractService {
    modelUrl = 'lang';
    model = LangModel;
}