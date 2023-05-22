import { Pretendard } from "@/utils/font";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "./ReactQueryProvider";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

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
      <body className={Pretendard.className}>
        <ReactQueryProvider>
          <Header />
          <div className="bg-cardFrameColor">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
