import { AbstractService } from './AbstractService';
import { UserModel } from '../models/UserModel';

export class UserService extends AbstractService {
    modelUrl = 'user';
    model = UserModel;
}