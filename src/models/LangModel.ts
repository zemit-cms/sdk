import 'reflect-metadata';
import { Type } from 'class-transformer';
import { LangModelAbstract } from './abstracts/LangModelAbstract';
import { UserModel } from './UserModel';
import { CategoryModel } from './CategoryModel';
import { FlagModel } from './FlagModel';
import { MetaModel } from './MetaModel';
import { PageModel } from './PageModel';
import { PostModel } from './PostModel';
import { SiteLangModel } from './SiteLangModel';
import { TableModel } from './TableModel';
import { TranslateModel } from './TranslateModel';
import { TranslateFieldModel } from './TranslateFieldModel';
import { WorkspaceLangModel } from './WorkspaceLangModel';
import { SiteModel } from './SiteModel';
import { WorkspaceModel } from './WorkspaceModel';

export class LangModel extends LangModelAbstract {

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

  @Type(() => TableModel)
  TableList!: TableModel[];

  @Type(() => TranslateModel)
  TranslateList!: TranslateModel[];

  @Type(() => TranslateFieldModel)
  TranslateFieldList!: TranslateFieldModel[];

  @Type(() => WorkspaceLangModel)
  WorkspaceLangList!: WorkspaceLangModel[];

  @Type(() => SiteModel)
  CategorySiteList!: SiteModel[];

  @Type(() => SiteModel)
  FlagSiteList!: SiteModel[];

  @Type(() => PageModel)
  FlagPageList!: PageModel[];

  @Type(() => SiteModel)
  MetaSiteList!: SiteModel[];

  @Type(() => PageModel)
  MetaPageList!: PageModel[];

  @Type(() => PostModel)
  MetaPostList!: PostModel[];

  @Type(() => CategoryModel)
  MetaCategoryList!: CategoryModel[];

  @Type(() => SiteModel)
  PageSiteList!: SiteModel[];

  @Type(() => SiteModel)
  PostSiteList!: SiteModel[];

  @Type(() => PageModel)
  PostPageList!: PageModel[];

  @Type(() => SiteModel)
  SiteList!: SiteModel[];

  @Type(() => WorkspaceModel)
  TableWorkspaceList!: WorkspaceModel[];

  @Type(() => SiteModel)
  TranslateSiteList!: SiteModel[];

  @Type(() => PageModel)
  TranslatePageList!: PageModel[];

  @Type(() => PostModel)
  TranslatePostList!: PostModel[];

  @Type(() => CategoryModel)
  TranslateCategoryList!: CategoryModel[];

  @Type(() => SiteModel)
  TranslateFieldSiteList!: SiteModel[];

  @Type(() => TableModel)
  TranslateFieldTableList!: TableModel[];

  @Type(() => WorkspaceModel)
  WorkspaceList!: WorkspaceModel[];
}