import { AbstractService } from './AbstractService';
import { JobSchedulerModel } from '../models/JobSchedulerModel';

export class JobSchedulerService extends AbstractService {
    modelUrl = 'job-scheduler';
    model = JobSchedulerModel;
}