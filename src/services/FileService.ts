import { AbstractService } from './AbstractService';
import { FileModel } from '../models/FileModel';

export class FileService extends AbstractService {
    modelUrl = 'file';
    model = FileModel;
}