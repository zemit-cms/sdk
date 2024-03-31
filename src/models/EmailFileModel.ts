import 'reflect-metadata';
import { Type } from 'class-transformer';
import { EmailFileModelAbstract } from './abstracts/EmailFileModelAbstract';
import { UserModel } from './UserModel';
import { EmailModel } from './EmailModel';
import { FileModel } from './FileModel';

export class EmailFileModel extends EmailFileModelAbstract {

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

  @Type(() => EmailModel)
  EmailEntity!: EmailModel;

  @Type(() => FileModel)
  FileEntity!: FileModel;
}