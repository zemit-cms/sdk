import 'reflect-metadata';
import { Type } from 'class-transformer';
import { GroupRoleModelAbstract } from './abstracts/GroupRoleModelAbstract';
import { UserModel } from './UserModel';
import { GroupModel } from './GroupModel';
import { RoleModel } from './RoleModel';

export class GroupRoleModel extends GroupRoleModelAbstract {

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

  @Type(() => GroupModel)
  GroupEntity!: GroupModel;

  @Type(() => RoleModel)
  RoleEntity!: RoleModel;
}