import { AbstractService } from './AbstractService';
import { FileRelationModel } from '../models/FileRelationModel';

export class FileRelationService extends AbstractService {
    modelUrl = 'file-relation';
    model = FileRelationModel;
}