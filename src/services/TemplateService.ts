import { AbstractService } from './AbstractService';
import { TemplateModel } from '../models/TemplateModel';

export class TemplateService extends AbstractService {
    modelUrl = 'template';
    model = TemplateModel;
}