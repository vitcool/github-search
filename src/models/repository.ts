export interface IOwner {
  login: string;
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
}

export default IRepository;