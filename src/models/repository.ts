export interface IOwner {
  login: string;
}

export interface IPrimaryLanguage {
  name: string;
  color: string;
}

export interface IRepository {
  id: string;
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  isPrivate: boolean;
  owner: IOwner;
  primaryLanguage: IPrimaryLanguage;
}

export default IRepository;
