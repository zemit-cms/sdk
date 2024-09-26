import 'reflect-metadata';
import { Type } from 'class-transformer';
import { WorkspaceModelAbstract } from './abstracts/WorkspaceModelAbstract';
import { UserModel } from './UserModel';
import { ColumnModel } from './ColumnModel';
import { DataModel } from './DataModel';
import { RecordModel } from './RecordModel';
import { TableModel } from './TableModel';
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

  @Type(() => ColumnModel)
  ColumnList!: ColumnModel[];

  @Type(() => DataModel)
  DataList!: DataModel[];

  @Type(() => RecordModel)
  RecordList!: RecordModel[];

  @Type(() => TableModel)
  TableList!: TableModel[];

  @Type(() => WorkspaceLangModel)
  WorkspaceLangList!: WorkspaceLangModel[];

  @Type(() => TableModel)
  ColumnTableList!: TableModel[];

  @Type(() => TableModel)
  DataTableList!: TableModel[];

  @Type(() => ColumnModel)
  DataColumnList!: ColumnModel[];

  @Type(() => RecordModel)
  DataRecordList!: RecordModel[];

  @Type(() => TableModel)
  RecordTableList!: TableModel[];

  @Type(() => LangModel)
  TableLangList!: LangModel[];

  @Type(() => LangModel)
  LangList!: LangModel[];
}