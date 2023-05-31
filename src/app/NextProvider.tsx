"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Script from "next/script";
import { PropsWithChildren, useState } from "react";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import { RecoilRoot } from "recoil";

export default function NextProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  // const { loading, error } = useInjectKakaoMapApi({
  //   appkey: `${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`,
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        {children}
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
