import 'reflect-metadata';
import { Type } from 'class-transformer';
import { WorkspaceModelAbstract } from './abstracts/WorkspaceModelAbstract';
import { UserModel } from './UserModel';
import { WorkspaceLangModel } from './WorkspaceLangModel';
import { LangModel } from './LangModel';

export class WorkspaceModel extends WorkspaceModelAbstract {

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

  @Type(() => WorkspaceLangModel)
  LangNode!: WorkspaceLangModel[];

  @Type(() => LangModel)
  LangList!: LangModel[];
}