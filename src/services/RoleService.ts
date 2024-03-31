import { AbstractService } from './AbstractService';
import { RoleModel } from '../models/RoleModel';

export class RoleService extends AbstractService {
    modelUrl = 'role';
    model = RoleModel;
}