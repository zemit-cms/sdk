import { AbstractService } from './AbstractService';
import { GroupModel } from '../models/GroupModel';

export class GroupService extends AbstractService {
    modelUrl = 'group';
    model = GroupModel;
}