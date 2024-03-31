import { AbstractService } from './AbstractService';
import { UserTypeModel } from '../models/UserTypeModel';

export class UserTypeService extends AbstractService {
    modelUrl = 'user-type';
    model = UserTypeModel;
}