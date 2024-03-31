import 'reflect-metadata';
import { Type } from 'class-transformer';
import { UserTypeModelAbstract } from './abstracts/UserTypeModelAbstract';
import { UserModel } from './UserModel';
import { TypeModel } from './TypeModel';

export class UserTypeModel extends UserTypeModelAbstract {

  @Type(() => UserModel)
  User!: UserModel;

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

  @Type(() => UserModel)
  RestoredAs!: UserModel;

  @Type(() => UserModel)
  UserEntity!: UserModel;

  @Type(() => TypeModel)
  TypeEntity!: TypeModel;
}