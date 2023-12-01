import {RoutersNames} from './index';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type UsersParams = {[RoutersNames.USERS]: undefined};
export type UserPostsParams = {
  [RoutersNames.USER_POSTS]: {userId: number; userName: string};
};

export type UserNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<UsersParams, RoutersNames.USERS>,
  NativeStackNavigationProp<UserPostsParams, RoutersNames.USER_POSTS>
>;

export type UserPostsRouteProps<RouteName extends keyof UserPostsParams> =
  RouteProp<UserPostsParams, RouteName>;
