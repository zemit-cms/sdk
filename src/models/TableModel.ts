import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TableModelAbstract } from './abstracts/TableModelAbstract';
import { UserModel } from './UserModel';
import { FieldModel } from './FieldModel';

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

  @Type(() => FieldModel)
  Fields!: FieldModel[];
}