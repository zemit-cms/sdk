import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TranslateFieldModelAbstract } from './abstracts/TranslateFieldModelAbstract';
import { UserModel } from './UserModel';
import { SiteModel } from './SiteModel';
import { LangModel } from './LangModel';
import { TableModel } from './TableModel';

export class TranslateFieldModel extends TranslateFieldModelAbstract {

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

  @Type(() => SiteModel)
  SiteEntity!: SiteModel;

  @Type(() => LangModel)
  LangEntity!: LangModel;

  @Type(() => TableModel)
  TableEntity!: TableModel;

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
}