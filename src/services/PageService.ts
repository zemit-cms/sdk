import { AbstractService } from './AbstractService';
import { PageModel } from '../models/PageModel';

export class PageService extends AbstractService {
    modelUrl = 'page';
    model = PageModel;
}