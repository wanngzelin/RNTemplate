import {createContext} from 'react';

export type UserInfo = any;

export type UserInfoAction =
  | {type: 'signOut'}
  | {type: 'signIn'; value: UserInfo};

export type UserInfoContext = {
  signIn: (v: UserInfo) => void;
  signOut: () => void;
  userInfo?: UserInfo;
};

export const UserContext = createContext<UserInfoContext>({
  userInfo: null,
  signIn: () => {},
  signOut: () => {},
});
