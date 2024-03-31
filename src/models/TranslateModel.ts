import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TranslateModelAbstract } from './abstracts/TranslateModelAbstract';
import { UserModel } from './UserModel';

export class TranslateModel extends TranslateModelAbstract {

  @Type(() => UserModel)
  CreatedBy!: UserModel;

  @Type(() => UserModel)
  CreatedAs!: UserModel;

  @Type(() => UserModel)
  UpdatedBy!: UserModel;

  @Type(() => UserModel)
  UpdatedAs!: UserModel;

  @Type(() => UserModel)
  DeletedBy!: UserModel;

  @Type(() => UserModel)
  DeletedAs!: UserModel;

  @Type(() => UserModel)
  RestoredBy!: UserModel;
}