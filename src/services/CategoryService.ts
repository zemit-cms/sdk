import { AbstractService } from './AbstractService';
import { CategoryModel } from '../models/CategoryModel';

export class CategoryService extends AbstractService {
    modelUrl = 'category';
    model = CategoryModel;
}