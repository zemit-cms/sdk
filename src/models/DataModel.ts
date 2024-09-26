import 'reflect-metadata';
import { Type } from 'class-transformer';
import { DataModelAbstract } from './abstracts/DataModelAbstract';
import { UserModel } from './UserModel';
import { WorkspaceModel } from './WorkspaceModel';
import { TableModel } from './TableModel';
import { ColumnModel } from './ColumnModel';
import { RecordModel } from './RecordModel';

export class DataModel extends DataModelAbstract {

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

  @Type(() => ColumnModel)
  ColumnEntity!: ColumnModel;

  @Type(() => RecordModel)
  RecordEntity!: RecordModel;

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