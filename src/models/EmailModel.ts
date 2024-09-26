import 'reflect-metadata';
import { Type } from 'class-transformer';
import { EmailModelAbstract } from './abstracts/EmailModelAbstract';
import { UserModel } from './UserModel';
import { TemplateModel } from './TemplateModel';
import { EmailFileModel } from './EmailFileModel';
import { FileModel } from './FileModel';

export class EmailModel extends EmailModelAbstract {

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

  @Type(() => TemplateModel)
  TemplateEntity!: TemplateModel;

  @Type(() => UserModel)
  SentByEntity!: UserModel;

  @Type(() => UserModel)
  SentAsEntity!: UserModel;

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

  @Type(() => EmailFileModel)
  EmailFileList!: EmailFileModel[];

  @Type(() => FileModel)
  FileList!: FileModel[];
}