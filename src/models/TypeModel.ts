import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TypeModelAbstract } from './abstracts/TypeModelAbstract';
import { UserModel } from './UserModel';
import { UserTypeModel } from './UserTypeModel';
import { GroupTypeModel } from './GroupTypeModel';
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

  @Type(() => UserTypeModel)
  UserNode!: UserTypeModel[];

  @Type(() => GroupTypeModel)
  GroupNode!: GroupTypeModel[];

  @Type(() => UserModel)
  UserList!: UserModel[];

  @Type(() => GroupModel)
  GroupList!: GroupModel[];
}