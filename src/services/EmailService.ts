import { AbstractService } from './AbstractService';
import { EmailModel } from '../models/EmailModel';

export class EmailService extends AbstractService {
    modelUrl = 'email';
    model = EmailModel;
}