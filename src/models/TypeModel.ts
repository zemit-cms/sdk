import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TypeModelAbstract } from './abstracts/TypeModelAbstract';
import { UserModel } from './UserModel';
import { GroupTypeModel } from './GroupTypeModel';
import { UserTypeModel } from './UserTypeModel';
import { GroupModel } from './GroupModel';

export class TypeModel extends TypeModelAbstract {

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

  @Type(() => GroupTypeModel)
  GroupTypeList!: GroupTypeModel[];

  @Type(() => UserTypeModel)
  UserTypeList!: UserTypeModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];
}