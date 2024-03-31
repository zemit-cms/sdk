import { AbstractService } from './AbstractService';
import { WorkspaceLangModel } from '../models/WorkspaceLangModel';

export class WorkspaceLangService extends AbstractService {
    modelUrl = 'workspace-lang';
    model = WorkspaceLangModel;
}