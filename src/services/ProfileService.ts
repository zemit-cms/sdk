import { AbstractService } from './AbstractService';
import { ProfileModel } from '../models/ProfileModel';

export class ProfileService extends AbstractService {
    modelUrl = 'profile';
    model = ProfileModel;
}