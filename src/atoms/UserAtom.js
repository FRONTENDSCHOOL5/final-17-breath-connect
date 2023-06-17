import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserAtom = atom({
  key: 'UserAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
