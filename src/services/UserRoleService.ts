import { AbstractService } from './AbstractService';
import { UserRoleModel } from '../models/UserRoleModel';

export class UserRoleService extends AbstractService {
    modelUrl = 'user-role';
    model = UserRoleModel;
}