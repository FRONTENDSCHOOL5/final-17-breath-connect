import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import basicProfile from '../assets/images/basic-profile-l.svg';

const { persistAtom } = recoilPersist();

export const ProfileImageAtom = atom({
  key: 'ProfileImageAtom',
  default: basicProfile,
  effects_UNSTABLE: [persistAtom],
});

export const AccountNameAtom = atom({
  key: 'AccountNameAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
