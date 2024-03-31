import { AbstractService } from './AbstractService';
import { GroupFeatureModel } from '../models/GroupFeatureModel';

export class GroupFeatureService extends AbstractService {
    modelUrl = 'group-feature';
    model = GroupFeatureModel;
}