import 'reflect-metadata';
import { Type } from 'class-transformer';
import { RoleModelAbstract } from './abstracts/RoleModelAbstract';
import { UserModel } from './UserModel';
import { GroupRoleModel } from './GroupRoleModel';
import { RoleFeatureModel } from './RoleFeatureModel';
import { UserRoleModel } from './UserRoleModel';
import { GroupModel } from './GroupModel';
import { FeatureModel } from './FeatureModel';

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

  @Type(() => GroupRoleModel)
  GroupRoleList!: GroupRoleModel[];

  @Type(() => RoleFeatureModel)
  RoleFeatureList!: RoleFeatureModel[];

  @Type(() => UserRoleModel)
  UserRoleList!: UserRoleModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];

  @Type(() => FeatureModel)
  FeatureList!: FeatureModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];
}