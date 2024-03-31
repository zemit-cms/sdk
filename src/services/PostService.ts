import { AbstractService } from './AbstractService';
import { PostModel } from '../models/PostModel';

export class PostService extends AbstractService {
    modelUrl = 'post';
    model = PostModel;
}