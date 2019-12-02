import {IHome} from './i-home';
import {IProfile} from './i-profile';

export interface IHomeOrder {
  house: IHome;
  tenant: IProfile;
  checkin: string;
  checkout: string;
  orderDate: string;
}
