import 'reflect-metadata';
import { Type } from 'class-transformer';
import { PostModelAbstract } from './abstracts/PostModelAbstract';
import { UserModel } from './UserModel';
import { LangModel } from './LangModel';
import { SiteModel } from './SiteModel';
import { PageModel } from './PageModel';
import { MetaModel } from './MetaModel';
import { PostCategoryModel } from './PostCategoryModel';
import { TranslateModel } from './TranslateModel';
import { CategoryModel } from './CategoryModel';

export class PostModel extends PostModelAbstract {

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

  @Type(() => LangModel)
  LangEntity!: LangModel;

  @Type(() => SiteModel)
  SiteEntity!: SiteModel;

  @Type(() => PageModel)
  PageEntity!: PageModel;

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

  @Type(() => MetaModel)
  MetaList!: MetaModel[];

  @Type(() => PostCategoryModel)
  PostCategoryList!: PostCategoryModel[];

  @Type(() => TranslateModel)
  TranslateList!: TranslateModel[];

  @Type(() => LangModel)
  MetaLangList!: LangModel[];

  @Type(() => SiteModel)
  MetaSiteList!: SiteModel[];

  @Type(() => PageModel)
  MetaPageList!: PageModel[];

  @Type(() => CategoryModel)
  MetaCategoryList!: CategoryModel[];

  @Type(() => CategoryModel)
  CategoryList!: CategoryModel[];

  @Type(() => LangModel)
  TranslateLangList!: LangModel[];

  @Type(() => SiteModel)
  TranslateSiteList!: SiteModel[];

  @Type(() => PageModel)
  TranslatePageList!: PageModel[];

  @Type(() => CategoryModel)
  TranslateCategoryList!: CategoryModel[];
}