import { AbstractService } from './AbstractService';
import { Oauth2Model } from '../models/Oauth2Model';

export class Oauth2Service extends AbstractService {
    modelUrl = 'oauth2';
    model = Oauth2Model;
}