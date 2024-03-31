import { AbstractService } from './AbstractService';
import { MenuModel } from '../models/MenuModel';

export class MenuService extends AbstractService {
    modelUrl = 'menu';
    model = MenuModel;
}