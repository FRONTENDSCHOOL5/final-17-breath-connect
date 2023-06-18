import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginStateAtom = atom({
  key: 'LoginStateAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
