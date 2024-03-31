import 'reflect-metadata';
import { Type } from 'class-transformer';
import { GroupModelAbstract } from './abstracts/GroupModelAbstract';
import { UserModel } from './UserModel';
import { UserGroupModel } from './UserGroupModel';
import { GroupRoleModel } from './GroupRoleModel';
import { GroupTypeModel } from './GroupTypeModel';
import { RoleModel } from './RoleModel';
import { TypeModel } from './TypeModel';

export class GroupModel extends GroupModelAbstract {

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

  @Type(() => UserGroupModel)
  UserNode!: UserGroupModel[];

  @Type(() => GroupRoleModel)
  RoleNode!: GroupRoleModel[];

  @Type(() => GroupTypeModel)
  TypeNode!: GroupTypeModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];

  @Type(() => RoleModel)
  RoleList!: RoleModel[];

  @Type(() => TypeModel)
  TypeList!: TypeModel[];
}