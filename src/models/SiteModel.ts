import 'reflect-metadata';
import { Type } from 'class-transformer';
import { SiteModelAbstract } from './abstracts/SiteModelAbstract';
import { UserModel } from './UserModel';
import { CategoryModel } from './CategoryModel';
import { FlagModel } from './FlagModel';
import { MetaModel } from './MetaModel';
import { PageModel } from './PageModel';
import { PostModel } from './PostModel';
import { SiteLangModel } from './SiteLangModel';
import { TranslateModel } from './TranslateModel';
import { TranslateFieldModel } from './TranslateFieldModel';
import { LangModel } from './LangModel';
import { TableModel } from './TableModel';

export class SiteModel extends SiteModelAbstract {

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

  @Type(() => CategoryModel)
  CategoryList!: CategoryModel[];

  @Type(() => FlagModel)
  FlagList!: FlagModel[];

  @Type(() => MetaModel)
  MetaList!: MetaModel[];

  @Type(() => PageModel)
  PageList!: PageModel[];

  @Type(() => PostModel)
  PostList!: PostModel[];

  @Type(() => SiteLangModel)
  SiteLangList!: SiteLangModel[];

  @Type(() => TranslateModel)
  TranslateList!: TranslateModel[];

  @Type(() => TranslateFieldModel)
  TranslateFieldList!: TranslateFieldModel[];

  @Type(() => LangModel)
  CategoryLangList!: LangModel[];

  @Type(() => PageModel)
  FlagPageList!: PageModel[];

  @Type(() => LangModel)
  FlagLangList!: LangModel[];

  @Type(() => LangModel)
  MetaLangList!: LangModel[];

  @Type(() => PageModel)
  MetaPageList!: PageModel[];

  @Type(() => PostModel)
  MetaPostList!: PostModel[];

  @Type(() => CategoryModel)
  MetaCategoryList!: CategoryModel[];

  @Type(() => LangModel)
  PageLangList!: LangModel[];

  @Type(() => LangModel)
  PostLangList!: LangModel[];

  @Type(() => PageModel)
  PostPageList!: PageModel[];

  @Type(() => LangModel)
  LangList!: LangModel[];

  @Type(() => LangModel)
  TranslateLangList!: LangModel[];

  @Type(() => PageModel)
  TranslatePageList!: PageModel[];

  @Type(() => PostModel)
  TranslatePostList!: PostModel[];

  @Type(() => CategoryModel)
  TranslateCategoryList!: CategoryModel[];

  @Type(() => LangModel)
  TranslateFieldLangList!: LangModel[];

  @Type(() => TableModel)
  TranslateFieldTableList!: TableModel[];
}