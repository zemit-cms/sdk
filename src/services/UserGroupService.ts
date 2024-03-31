import { AbstractService } from './AbstractService';
import { UserGroupModel } from '../models/UserGroupModel';

export class UserGroupService extends AbstractService {
    modelUrl = 'user-group';
    model = UserGroupModel;
}