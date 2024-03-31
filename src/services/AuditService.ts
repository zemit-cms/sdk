import { AbstractService } from './AbstractService';
import { AuditModel } from '../models/AuditModel';

export class AuditService extends AbstractService {
    modelUrl = 'audit';
    model = AuditModel;
}