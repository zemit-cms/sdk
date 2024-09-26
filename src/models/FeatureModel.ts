import 'reflect-metadata';
import { Type } from 'class-transformer';
import { FeatureModelAbstract } from './abstracts/FeatureModelAbstract';
import { UserModel } from './UserModel';
import { GroupFeatureModel } from './GroupFeatureModel';
import { RoleFeatureModel } from './RoleFeatureModel';
import { UserFeatureModel } from './UserFeatureModel';
import { GroupModel } from './GroupModel';
import { RoleModel } from './RoleModel';

export class FeatureModel extends FeatureModelAbstract {

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

  @Type(() => RoleFeatureModel)
  RoleFeatureList!: RoleFeatureModel[];

  @Type(() => UserFeatureModel)
  UserFeatureList!: UserFeatureModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];

  @Type(() => RoleModel)
  RoleList!: RoleModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];
}