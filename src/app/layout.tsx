/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Pretendard } from "@/utils/font";
import "./globals.css";
import NextProvider from "./NextProvider";
import Script from "next/script";

export const metadata = {
  title: "서울보모",
  description: "서울 보육의 모든 것",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const kakaoUrl = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
  return (
    <html lang="ko">
      <body className="bg-cardFrameColor">
        <Script src={kakaoUrl} strategy="beforeInteractive" />
        <NextProvider>
          <div className={Pretendard.className}>{children}</div>
        </NextProvider>
      </body>
    </html>
  );
}
