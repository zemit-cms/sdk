import 'reflect-metadata';
import { Type } from 'class-transformer';
import { PageModelAbstract } from './abstracts/PageModelAbstract';
import { UserModel } from './UserModel';
import { LangModel } from './LangModel';
import { SiteModel } from './SiteModel';
import { FlagModel } from './FlagModel';
import { MetaModel } from './MetaModel';
import { PostModel } from './PostModel';
import { TranslateModel } from './TranslateModel';
import { CategoryModel } from './CategoryModel';

export class PageModel extends PageModelAbstract {

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

  @Type(() => FlagModel)
  FlagList!: FlagModel[];

  @Type(() => MetaModel)
  MetaList!: MetaModel[];

  @Type(() => PostModel)
  PostList!: PostModel[];

  @Type(() => TranslateModel)
  TranslateList!: TranslateModel[];

  @Type(() => SiteModel)
  FlagSiteList!: SiteModel[];

  @Type(() => LangModel)
  FlagLangList!: LangModel[];

  @Type(() => LangModel)
  MetaLangList!: LangModel[];

  @Type(() => SiteModel)
  MetaSiteList!: SiteModel[];

  @Type(() => PostModel)
  MetaPostList!: PostModel[];

  @Type(() => CategoryModel)
  MetaCategoryList!: CategoryModel[];

  @Type(() => LangModel)
  PostLangList!: LangModel[];

  @Type(() => SiteModel)
  PostSiteList!: SiteModel[];

  @Type(() => LangModel)
  TranslateLangList!: LangModel[];

  @Type(() => SiteModel)
  TranslateSiteList!: SiteModel[];

  @Type(() => PostModel)
  TranslatePostList!: PostModel[];

  @Type(() => CategoryModel)
  TranslateCategoryList!: CategoryModel[];
}