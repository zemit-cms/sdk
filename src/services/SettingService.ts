import { AbstractService } from './AbstractService';
import { SettingModel } from '../models/SettingModel';

export class SettingService extends AbstractService {
    modelUrl = 'setting';
    model = SettingModel;
}