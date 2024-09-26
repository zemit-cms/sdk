import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TableModelAbstract } from './abstracts/TableModelAbstract';
import { UserModel } from './UserModel';
import { LangModel } from './LangModel';
import { WorkspaceModel } from './WorkspaceModel';
import { ColumnModel } from './ColumnModel';
import { DataModel } from './DataModel';
import { RecordModel } from './RecordModel';
import { TranslateFieldModel } from './TranslateFieldModel';
import { SiteModel } from './SiteModel';

export class TableModel extends TableModelAbstract {

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

  @Type(() => LangModel)
  LangEntity!: LangModel;

  @Type(() => WorkspaceModel)
  WorkspaceEntity!: WorkspaceModel;

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

  @Type(() => ColumnModel)
  ColumnList!: ColumnModel[];

  @Type(() => DataModel)
  DataList!: DataModel[];

  @Type(() => RecordModel)
  RecordList!: RecordModel[];

  @Type(() => TranslateFieldModel)
  TranslateFieldList!: TranslateFieldModel[];

  @Type(() => WorkspaceModel)
  ColumnWorkspaceList!: WorkspaceModel[];

  @Type(() => WorkspaceModel)
  DataWorkspaceList!: WorkspaceModel[];

  @Type(() => ColumnModel)
  DataColumnList!: ColumnModel[];

  @Type(() => RecordModel)
  DataRecordList!: RecordModel[];

  @Type(() => WorkspaceModel)
  RecordWorkspaceList!: WorkspaceModel[];

  @Type(() => SiteModel)
  TranslateFieldSiteList!: SiteModel[];

  @Type(() => LangModel)
  TranslateFieldLangList!: LangModel[];
}