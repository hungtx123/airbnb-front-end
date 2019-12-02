import {IRole} from './i-role';

export interface IProfile {
  id: number;
  token: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  avatar: string;
  role: IRole[];
}
