import {Category} from './category';

export interface HomeHost {
  id: string;
  houseName: string;
  category: Category;
  address: string;
  bedroomNumber: number;
  bathroomNumber: number;
  area: number;
  price: number;
  imageUrls: string;
  lat: number;
  lng: number;
}
