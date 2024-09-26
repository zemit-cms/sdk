import 'reflect-metadata';
import { Type } from 'class-transformer';
import { SessionModelAbstract } from './abstracts/SessionModelAbstract';
import { UserModel } from './UserModel';

export class SessionModel extends SessionModelAbstract {

  @Type(() => UserModel)
  User!: UserModel;

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
  UserEntity!: UserModel;

  @Type(() => UserModel)
  AsUserEntity!: UserModel;

  @Type(() => UserModel)
  CreatedByEntity!: UserModel;

  @Type(() => UserModel)
  CreatedAsEntity!: UserModel;

  @Type(() => UserModel)
  UpdatedByEntity!: UserModel;

  @Type(() => UserModel)
  UpdatedAsEntity!: UserModel;

  @Type(() => UserModel)
  DeletedByEntity!: UserModel;

  @Type(() => UserModel)
  DeletedAsEntity!: UserModel;

  @Type(() => UserModel)
  RestoredByEntity!: UserModel;

  @Type(() => UserModel)
  RestoredAsEntity!: UserModel;
}