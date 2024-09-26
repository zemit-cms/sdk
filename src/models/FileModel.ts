import 'reflect-metadata';
import { Type } from 'class-transformer';
import { FileModelAbstract } from './abstracts/FileModelAbstract';
import { UserModel } from './UserModel';
import { EmailFileModel } from './EmailFileModel';
import { FileRelationModel } from './FileRelationModel';
import { EmailModel } from './EmailModel';

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

  @Type(() => EmailFileModel)
  EmailFileList!: EmailFileModel[];

  @Type(() => FileRelationModel)
  FileRelationList!: FileRelationModel[];

  @Type(() => EmailModel)
  EmailList!: EmailModel[];
}