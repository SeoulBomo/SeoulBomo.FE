"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useState } from "react";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

export default function NextProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  // const { loading, error } = useInjectKakaoMapApi({
  //   appkey: `${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`,
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
      <Analytics />
    </QueryClientProvider>
  );
}
