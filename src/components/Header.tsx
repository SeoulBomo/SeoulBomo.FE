"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "./Logo";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "@/state";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isLogin = useRecoilValue(isLoginSelector);

  // SSR Hydration 때문에 필요한 코드
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  //Wait till NextJS rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* nav 그룹 */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* Home 버튼 */}
          <Link
            href="/"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            홈
          </Link>

          {/* Information 버튼 */}
          <Link
            href="/information"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            보육정책
          </Link>

          {/* About us 버튼 */}
          <Link
            href="/about-us"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            소개
          </Link>
        </Popover.Group>

        {/* 로그인/회원가입 버튼 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isHydrated ? (
            isLogin ? (
              <Link href="/mypage">
                <button className="w-[8.3rem] h-[2.3rem] bg-yellowColor rounded-xl">
                  <div className="font-bold text-gray-900 text-sm">
                    마이페이지
                  </div>
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="w-[8.3rem] h-[2.3rem] bg-yellowColor rounded-xl">
                  <div className="font-bold text-gray-900 text-sm">
                    로그인 / 회원가입
                  </div>
                </button>
              </Link>
            )
          ) : (
            <div>
              <button className="w-[8.3rem] h-[2.3rem] bg-yellowColor rounded-xl">
                <div className="font-bold text-gray-900 text-sm">
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 text-gray-500 animate-spin fill-yellow-200"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* 모바일 Dialog */}
      <Transition
        show={mobileMenuOpen}
        appear
        as={Fragment}
        enter="ease-in-out duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <Transition.Child
              enter="transform transition ease-in-out duration-700"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transform transition ease-in-out duration-700"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <Logo />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* 모바일 홈버튼 */}
                    <Link
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    {/* 모바일 Information 버튼 */}
                    <Link
                      href="/information"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Information
                    </Link>

                    {/* 모바일 About us 버튼 */}
                    <Link
                      href="/about-us"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </div>
                  <div className="py-6">
                    {isLogin ? (
                      <Link
                        href="/mypage"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-bold text-gray-900 text-sm">
                          마이페이지
                        </div>
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-bold text-gray-900 text-sm">
                          로그인 / 회원가입
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}
