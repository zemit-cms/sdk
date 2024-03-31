import { AbstractService } from './AbstractService';
import { PhalconMigrationsModel } from '../models/PhalconMigrationsModel';

export class PhalconMigrationsService extends AbstractService {
    modelUrl = 'phalcon-migrations';
    model = PhalconMigrationsModel;
}