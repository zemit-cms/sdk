import {ModelInterface} from '../interfaces'

export class Model implements ModelInterface {
  _loading = false;
  _saving = false;
  _deleting = false;
  _restoring = false;
  _clone = false;
  _new = true;
}
