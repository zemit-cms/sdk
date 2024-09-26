import { AbstractService } from './AbstractService';
import { BackupModel } from '../models/BackupModel';

export class BackupService extends AbstractService {
    modelUrl = 'backup';
    model = BackupModel;
}