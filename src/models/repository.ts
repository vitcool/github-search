export interface IOwner {
  login: string;
}

export interface IPrimaryLanguage {
  name: string;
  color: string;
}

export interface IWatchersList {
  totalCount: number;
}

export interface IRepository {
  id: string;
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  watchers: IWatchersList;
  owner: IOwner;
  primaryLanguage: IPrimaryLanguage;
}

export interface IRepositoryWithRating extends IRepository {
  rating: number;
}
