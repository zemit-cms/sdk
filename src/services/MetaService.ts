import { AbstractService } from './AbstractService';
import { MetaModel } from '../models/MetaModel';

export class MetaService extends AbstractService {
    modelUrl = 'meta';
    model = MetaModel;
}