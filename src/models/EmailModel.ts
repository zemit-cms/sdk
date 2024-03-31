import 'reflect-metadata';
import { Type } from 'class-transformer';
import { EmailModelAbstract } from './abstracts/EmailModelAbstract';
import { UserModel } from './UserModel';
import { EmailFileModel } from './EmailFileModel';
import { TemplateModel } from './TemplateModel';
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

  @Type(() => EmailFileModel)
  FileNode!: EmailFileModel[];

  @Type(() => TemplateModel)
  TemplateEntity!: TemplateModel;

  @Type(() => FileModel)
  FileList!: FileModel[];
}
