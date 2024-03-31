import 'reflect-metadata';
import { Type } from 'class-transformer';
import { UserRoleModelAbstract } from './abstracts/UserRoleModelAbstract';
import { UserModel } from './UserModel';
import { RoleModel } from './RoleModel';

export class UserRoleModel extends UserRoleModelAbstract {

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

  @Type(() => RoleModel)
  RoleEntity!: RoleModel;
}