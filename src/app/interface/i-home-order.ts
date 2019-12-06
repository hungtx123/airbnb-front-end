import {IHome} from './i-home';
import {IProfile} from './i-profile';
import {IStatus} from './i-status';

export interface IHomeOrder {
  house: IHome;
  tenant: IProfile;
  checkin: string;
  checkout: string;
  orderDate: string;
  orderStatus: IStatus;
}
