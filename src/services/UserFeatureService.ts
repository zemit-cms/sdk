import { AbstractService } from './AbstractService';
import { UserFeatureModel } from '../models/UserFeatureModel';

export class UserFeatureService extends AbstractService {
    modelUrl = 'user-feature';
    model = UserFeatureModel;
}