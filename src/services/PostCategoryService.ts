import { AbstractService } from './AbstractService';
import { PostCategoryModel } from '../models/PostCategoryModel';

export class PostCategoryService extends AbstractService {
    modelUrl = 'post-category';
    model = PostCategoryModel;
}