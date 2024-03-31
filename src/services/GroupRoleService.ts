import { AbstractService } from './AbstractService';
import { GroupRoleModel } from '../models/GroupRoleModel';

export class GroupRoleService extends AbstractService {
    modelUrl = 'group-role';
    model = GroupRoleModel;
}