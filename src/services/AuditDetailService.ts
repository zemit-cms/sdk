import { AbstractService } from './AbstractService';
import { AuditDetailModel } from '../models/AuditDetailModel';

export class AuditDetailService extends AbstractService {
    modelUrl = 'audit-detail';
    model = AuditDetailModel;
}