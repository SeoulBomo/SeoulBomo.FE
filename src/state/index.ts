import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom: tokenPersistAtom } = recoilPersist({
  key: "persistAtom",
  storage: sessionStorage,
});

export const userAtom = atom({
  key: "userAtom",
  default: undefined,
  effects_UNSTABLE: [tokenPersistAtom],
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(userAtom),
});

export const kakaoTokenAtom = atom({
  key: "kakaoTokenAtom",
  default: undefined,
});

export const naverTokenAtom = atom({
  key: "naverTokenAtom",
  default: undefined,
});

export const filterState = atom({
  key: "filter",
  default: {},
});
