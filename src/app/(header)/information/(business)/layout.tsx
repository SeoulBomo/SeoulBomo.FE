export const metadata = {
  title: "서울보모",
  description: "서울 보육의 모든 것",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-start flex-wrap bg-cardFrameColor">
      {children}
    </div>
  );
}
