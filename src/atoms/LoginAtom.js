import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginAtom = atom({
  key: 'loginAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
