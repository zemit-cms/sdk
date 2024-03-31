import { AbstractService } from './AbstractService';
import { EmailFileModel } from '../models/EmailFileModel';

export class EmailFileService extends AbstractService {
    modelUrl = 'email-file';
    model = EmailFileModel;
}