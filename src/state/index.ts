import { atom, selector } from "recoil";

export const TokenAtom = atom({
  key: "TokenAtom",
  default: undefined,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => {
    const token = get(TokenAtom);
    return !!token;
  },
});

export const KakaoTokenAtom = atom({
  key: "KakaoTokenAtom",
  default: undefined,
});

export const filterState = atom({
  key: "filter",
  default: {},
});
