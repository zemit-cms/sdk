import 'reflect-metadata';
import { Type } from 'class-transformer';
import { PostCategoryModelAbstract } from './abstracts/PostCategoryModelAbstract';
import { UserModel } from './UserModel';

export class PostCategoryModel extends PostCategoryModelAbstract {

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
}