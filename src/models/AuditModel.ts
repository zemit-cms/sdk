import 'reflect-metadata';
import { Type } from 'class-transformer';
import { AuditModelAbstract } from './abstracts/AuditModelAbstract';
import { UserModel } from './UserModel';
import { AuditDetailModel } from './AuditDetailModel';

export class AuditModel extends AuditModelAbstract {

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

  @Type(() => AuditModel)
  ParentEntity!: AuditModel;

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

  @Type(() => AuditDetailModel)
  AuditDetailList!: AuditDetailModel[];
}