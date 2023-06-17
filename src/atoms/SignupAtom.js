import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const SignupAtom = atom({
  key: 'SignupAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
