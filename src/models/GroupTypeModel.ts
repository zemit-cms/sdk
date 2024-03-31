import 'reflect-metadata';
import { Type } from 'class-transformer';
import { GroupTypeModelAbstract } from './abstracts/GroupTypeModelAbstract';
import { UserModel } from './UserModel';
import { GroupModel } from './GroupModel';
import { TypeModel } from './TypeModel';

export class GroupTypeModel extends GroupTypeModelAbstract {

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

  @Type(() => TypeModel)
  TypeEntity!: TypeModel;
}