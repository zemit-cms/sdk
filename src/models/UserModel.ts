import 'reflect-metadata';
import { Type } from 'class-transformer';
import { UserModelAbstract } from './abstracts/UserModelAbstract';
import { FileModel } from './FileModel';
import { Oauth2Model } from './Oauth2Model';
import { ProfileModel } from './ProfileModel';
import { SessionModel } from './SessionModel';
import { UserFeatureModel } from './UserFeatureModel';
import { UserGroupModel } from './UserGroupModel';
import { UserRoleModel } from './UserRoleModel';
import { UserTypeModel } from './UserTypeModel';
import { FeatureModel } from './FeatureModel';
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

  @Type(() => FileModel)
  FileList!: FileModel[];

  @Type(() => Oauth2Model)
  Oauth2List!: Oauth2Model[];

  @Type(() => ProfileModel)
  ProfileList!: ProfileModel[];

  @Type(() => SessionModel)
  SessionList!: SessionModel[];

  @Type(() => UserFeatureModel)
  UserFeatureList!: UserFeatureModel[];

  @Type(() => UserGroupModel)
  UserGroupList!: UserGroupModel[];

  @Type(() => UserRoleModel)
  UserRoleList!: UserRoleModel[];

  @Type(() => UserTypeModel)
  UserTypeList!: UserTypeModel[];

  @Type(() => FeatureModel)
  FeatureList!: FeatureModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];

  @Type(() => RoleModel)
  RoleList!: RoleModel[];

  @Type(() => TypeModel)
  TypeList!: TypeModel[];
}