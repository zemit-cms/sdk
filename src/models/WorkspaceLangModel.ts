import 'reflect-metadata';
import { Type } from 'class-transformer';
import { WorkspaceLangModelAbstract } from './abstracts/WorkspaceLangModelAbstract';
import { UserModel } from './UserModel';
import { WorkspaceModel } from './WorkspaceModel';
import { LangModel } from './LangModel';

export class WorkspaceLangModel extends WorkspaceLangModelAbstract {

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

  @Type(() => WorkspaceModel)
  WorkspaceEntity!: WorkspaceModel;

  @Type(() => LangModel)
  LangEntity!: LangModel;
}