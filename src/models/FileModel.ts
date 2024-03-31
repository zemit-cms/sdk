import 'reflect-metadata';
import { Type } from 'class-transformer';
import { FileModelAbstract } from './abstracts/FileModelAbstract';
import { UserModel } from './UserModel';
import { EmailFileModel } from './EmailFileModel';

export class FileModel extends FileModelAbstract {

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

  @Type(() => EmailFileModel)
  EmailFileEntity!: EmailFileModel;
}