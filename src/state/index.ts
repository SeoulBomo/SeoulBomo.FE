import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom: tokenPersistAtom } = recoilPersist({
  key: "persistAtom",
  storage: sessionStorage,
});

export interface IUserTypes {
  id: string;
  accessToken: string;
  socialType: string;
  profileImage: string;
  name: string;
}

export const userAtom = atom<IUserTypes | undefined>({
  key: "userAtom",
  default: undefined,
  effects_UNSTABLE: [tokenPersistAtom],
});

export const isLoginSelector = selector<boolean>({
  key: "isLoginSelector",
  get: ({ get }) => !!get(userAtom),
});

export const kakaoTokenAtom = atom<undefined | string>({
  key: "kakaoTokenAtom",
  default: undefined,
});

export const naverTokenAtom = atom<undefined | string>({
  key: "naverTokenAtom",
  default: undefined,
});
