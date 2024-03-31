import { AbstractService } from './AbstractService';
import { GroupTypeModel } from '../models/GroupTypeModel';

export class GroupTypeService extends AbstractService {
    modelUrl = 'group-type';
    model = GroupTypeModel;
}