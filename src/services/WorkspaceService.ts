import { AbstractService } from './AbstractService';
import { WorkspaceModel } from '../models/WorkspaceModel';

export class WorkspaceService extends AbstractService {
    modelUrl = 'workspace';
    model = WorkspaceModel;
}