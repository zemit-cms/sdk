import 'reflect-metadata';
import { Type } from 'class-transformer';
import { ColumnModelAbstract } from './abstracts/ColumnModelAbstract';
import { UserModel } from './UserModel';
import { WorkspaceModel } from './WorkspaceModel';
import { TableModel } from './TableModel';
import { DataModel } from './DataModel';
import { RecordModel } from './RecordModel';

export class ColumnModel extends ColumnModelAbstract {

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

  @Type(() => DataModel)
  DataList!: DataModel[];

  @Type(() => WorkspaceModel)
  DataWorkspaceList!: WorkspaceModel[];

  @Type(() => TableModel)
  DataTableList!: TableModel[];

  @Type(() => RecordModel)
  DataRecordList!: RecordModel[];
}