import { AbstractService } from './AbstractService';
import { FlagModel } from '../models/FlagModel';

export class FlagService extends AbstractService {
    modelUrl = 'flag';
    model = FlagModel;
}