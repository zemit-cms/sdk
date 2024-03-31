import 'reflect-metadata';
import { Type } from 'class-transformer';
import { RoleModelAbstract } from './abstracts/RoleModelAbstract';
import { UserModel } from './UserModel';
import { UserRoleModel } from './UserRoleModel';
import { GroupRoleModel } from './GroupRoleModel';
import { GroupModel } from './GroupModel';

export class RoleModel extends RoleModelAbstract {

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

  @Type(() => UserRoleModel)
  UserNode!: UserRoleModel[];

  @Type(() => GroupRoleModel)
  GroupNode!: GroupRoleModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];
}