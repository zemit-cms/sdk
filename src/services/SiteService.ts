import { AbstractService } from './AbstractService';
import { SiteModel } from '../models/SiteModel';

export class SiteService extends AbstractService {
    modelUrl = 'site';
    model = SiteModel;
}