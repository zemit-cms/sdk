import { AbstractService } from './AbstractService';
import { JobModel } from '../models/JobModel';

export class JobService extends AbstractService {
    modelUrl = 'job';
    model = JobModel;
}