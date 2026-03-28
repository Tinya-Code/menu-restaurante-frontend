import { User } from './user.model';
import { RestaurantData } from './restaurant.model';

export interface RootData {
  user: User;
  restaurants: RestaurantData[];
}
