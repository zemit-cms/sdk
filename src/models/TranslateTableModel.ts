import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TranslateTableModelAbstract } from './abstracts/TranslateTableModelAbstract';
import { UserModel } from './UserModel';

export class TranslateTableModel extends TranslateTableModelAbstract {

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