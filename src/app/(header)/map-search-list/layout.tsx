export const metadata = {
  title: "서울보모 : 자치구 검색 목록",
  description: "서울보모 자치구 검색 목록 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
