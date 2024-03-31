import 'reflect-metadata';
import { Type } from 'class-transformer';
import { UserModelAbstract } from './abstracts/UserModelAbstract';
import { FileModel } from './FileModel';
import { UserGroupModel } from './UserGroupModel';
import { UserRoleModel } from './UserRoleModel';
import { UserTypeModel } from './UserTypeModel';
import { GroupModel } from './GroupModel';
import { RoleModel } from './RoleModel';
import { TypeModel } from './TypeModel';

export class UserModel extends UserModelAbstract {

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

  @Type(() => FileModel)
  FileList!: FileModel[];

  @Type(() => UserGroupModel)
  GroupNode!: UserGroupModel[];

  @Type(() => UserRoleModel)
  RoleNode!: UserRoleModel[];

  @Type(() => UserTypeModel)
  TypeNode!: UserTypeModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];

  @Type(() => RoleModel)
  RoleList!: RoleModel[];

  @Type(() => TypeModel)
  TypeList!: TypeModel[];
}