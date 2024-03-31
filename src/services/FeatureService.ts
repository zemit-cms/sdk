import { AbstractService } from './AbstractService';
import { FeatureModel } from '../models/FeatureModel';

export class FeatureService extends AbstractService {
    modelUrl = 'feature';
    model = FeatureModel;
}