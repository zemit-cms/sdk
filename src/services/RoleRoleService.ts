import { AbstractService } from './AbstractService';
import { RoleRoleModel } from '../models/RoleRoleModel';

export class RoleRoleService extends AbstractService {
    modelUrl = 'role-role';
    model = RoleRoleModel;
}