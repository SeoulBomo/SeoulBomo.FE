"use client";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap({ lat, lng }: { lat: number; lng: number }) {
  const kakaoUrl = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script src={kakaoUrl} strategy="beforeInteractive" />
      <Map
        className="lg:px-[19.5rem] py-[10rem]"
        center={{ lat: lat, lng: lng }}
      >
        <MapMarker position={{ lat: lat, lng: lng }} />
      </Map>
    </>
  );
}
