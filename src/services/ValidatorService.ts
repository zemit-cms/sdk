import { AbstractService } from './AbstractService';
import { ValidatorModel } from '../models/ValidatorModel';

export class ValidatorService extends AbstractService {
    modelUrl = 'validator';
    model = ValidatorModel;
}