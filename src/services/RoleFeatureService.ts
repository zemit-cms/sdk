import { AbstractService } from './AbstractService';
import { RoleFeatureModel } from '../models/RoleFeatureModel';

export class RoleFeatureService extends AbstractService {
    modelUrl = 'role-feature';
    model = RoleFeatureModel;
}