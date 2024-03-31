import { AbstractService } from './AbstractService';
import { SessionModel } from '../models/SessionModel';

export class SessionService extends AbstractService {
    modelUrl = 'session';
    model = SessionModel;
}