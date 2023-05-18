"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/">
            <Logo />
          </a>
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
          <a
            href="/"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            Home
          </a>

          {/* Information 버튼 */}
          <a
            href="/information"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            Information
          </a>

          {/* About us 버튼 */}
          <a
            href="/about-us"
            className="text-base font-semibold leading-6 text-gray-600 hover:text-gray-900"
          >
            About us
          </a>
        </Popover.Group>

        {/* 로그인/회원가입 버튼 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login">
            <button className="w-[8.3rem] h-[2.3rem] bg-yellowColor rounded-xl">
              <text className="font-bold text-gray-900 text-sm">
                로그인 / 회원가입
              </text>
            </button>
          </Link>
        </div>
      </nav>
      {/* 모바일 Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Logo />
            </a>
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
                >
                  Home
                </Link>
                {/* 모바일 Information 버튼 */}
                <Link
                  href="/information"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Information
                </Link>

                {/* 모바일 About us 버튼 */}
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <text className="font-bold text-gray-900 text-sm">
                    로그인 / 회원가입
                  </text>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
