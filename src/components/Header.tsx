"use client";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "./Logo";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "@/state";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLogin = useRecoilValue(isLoginSelector);
  console.log(isLogin);

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
            Home
          </Link>

          {/* Information 버튼 */}
          <Link
            href="/information"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            Information
          </Link>

          {/* About us 버튼 */}
          <Link
            href="/about-us"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            About us
          </Link>
        </Popover.Group>

        {/* 로그인/회원가입 버튼 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLogin ? (
            <Link href="/mypage">
              <button className="w-[6rem] h-[2.3rem] bg-yellowColor rounded-xl">
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
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-bold text-gray-900 text-sm">
                        로그인 / 회원가입
                      </div>
                    </Link>
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
