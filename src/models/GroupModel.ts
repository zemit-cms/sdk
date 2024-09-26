import 'reflect-metadata';
import { Type } from 'class-transformer';
import { GroupModelAbstract } from './abstracts/GroupModelAbstract';
import { UserModel } from './UserModel';
import { GroupFeatureModel } from './GroupFeatureModel';
import { GroupRoleModel } from './GroupRoleModel';
import { GroupTypeModel } from './GroupTypeModel';
import { UserGroupModel } from './UserGroupModel';
import { FeatureModel } from './FeatureModel';
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

  @Type(() => UserModel)
  CreatedByEntity!: UserModel;

  @Type(() => UserModel)
  CreatedAsEntity!: UserModel;

  @Type(() => UserModel)
  UpdatedByEntity!: UserModel;

  @Type(() => UserModel)
  UpdatedAsEntity!: UserModel;

  @Type(() => UserModel)
  DeletedAsEntity!: UserModel;

  @Type(() => UserModel)
  DeletedByEntity!: UserModel;

  @Type(() => UserModel)
  RestoredByEntity!: UserModel;

  @Type(() => UserModel)
  RestoredAsEntity!: UserModel;

  @Type(() => GroupFeatureModel)
  GroupFeatureList!: GroupFeatureModel[];

  @Type(() => GroupRoleModel)
  GroupRoleList!: GroupRoleModel[];

  @Type(() => GroupTypeModel)
  GroupTypeList!: GroupTypeModel[];

  @Type(() => UserGroupModel)
  UserGroupList!: UserGroupModel[];

  @Type(() => FeatureModel)
  FeatureList!: FeatureModel[];

  @Type(() => RoleModel)
  RoleList!: RoleModel[];

  @Type(() => TypeModel)
  TypeList!: TypeModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];
}