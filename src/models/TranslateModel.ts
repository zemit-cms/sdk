import 'reflect-metadata';
import { Type } from 'class-transformer';
import { TranslateModelAbstract } from './abstracts/TranslateModelAbstract';
import { UserModel } from './UserModel';
import { LangModel } from './LangModel';
import { SiteModel } from './SiteModel';
import { PageModel } from './PageModel';
import { PostModel } from './PostModel';
import { CategoryModel } from './CategoryModel';

export class TranslateModel extends TranslateModelAbstract {

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

  @Type(() => SiteModel)
  SiteEntity!: SiteModel;

  @Type(() => PageModel)
  PageEntity!: PageModel;

  @Type(() => PostModel)
  PostEntity!: PostModel;

  @Type(() => CategoryModel)
  CategoryEntity!: CategoryModel;

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