import { atom, selector } from 'recoil';

export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false,
});

export const toggleDarkModeState = atom({
  key: 'toggleDarkModeState',
  default: () => {},
});

export const iconColorSelector = selector({
  key: 'iconColorSelector',
  get: ({ get }) => {
    const isDarkMode = get(isDarkModeState);
    return isDarkMode ? 'transparent' : 'white';
  },
});

export const btnColorSelector = selector({
  key: 'btnColorSelector',
  get: ({ get }) => {
    const isDarkMode = get(isDarkModeState);
    return isDarkMode ? '#A16EE4' : '#6521D3';
  },
});
