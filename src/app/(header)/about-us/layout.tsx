export const metadata = {
  title: "서울보모 : 소개",
  description: "서울보모 소개 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
