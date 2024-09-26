import 'reflect-metadata';
import { Type } from 'class-transformer';
import { CategoryModelAbstract } from './abstracts/CategoryModelAbstract';
import { UserModel } from './UserModel';
import { SiteModel } from './SiteModel';
import { LangModel } from './LangModel';
import { MetaModel } from './MetaModel';
import { PostCategoryModel } from './PostCategoryModel';
import { TranslateModel } from './TranslateModel';
import { PageModel } from './PageModel';
import { PostModel } from './PostModel';

export class CategoryModel extends CategoryModelAbstract {

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

  @Type(() => PostModel)
  MetaPostList!: PostModel[];

  @Type(() => PostModel)
  PostList!: PostModel[];

  @Type(() => LangModel)
  TranslateLangList!: LangModel[];

  @Type(() => SiteModel)
  TranslateSiteList!: SiteModel[];

  @Type(() => PageModel)
  TranslatePageList!: PageModel[];

  @Type(() => PostModel)
  TranslatePostList!: PostModel[];
}