import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: 'user',
  default: {
    id: '',
    username: '',
    email: '',
    accountname: '',
    intro: '',
    image: '',
    effects_UNSTABLE: [persistAtom],
  },
});
