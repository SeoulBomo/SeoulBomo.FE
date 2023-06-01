export const metadata = {
  title: "서울보모 : 마이페이지",
  description: "서울보모 마이 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
