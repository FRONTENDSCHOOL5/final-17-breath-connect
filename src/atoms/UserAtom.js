import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    account: '',
    profileImg: '',
    username: '',
    intro: '',
  },
  effects_UNSTABLE: [persistAtom],
})
