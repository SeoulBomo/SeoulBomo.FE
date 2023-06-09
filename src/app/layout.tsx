/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Pretendard } from "@/utils/font";
import "./globals.css";
import NextProvider from "./NextProvider";

export const metadata = {
  title: "서울보모",
  description: "서울 보육의 모든 것",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-cardFrameColor">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextProvider>
          <div className={Pretendard.className}>{children}</div>
        </NextProvider>
      </body>
    </html>
  );
}
