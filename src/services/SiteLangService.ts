import { AbstractService } from './AbstractService';
import { SiteLangModel } from '../models/SiteLangModel';

export class SiteLangService extends AbstractService {
    modelUrl = 'site-lang';
    model = SiteLangModel;
}