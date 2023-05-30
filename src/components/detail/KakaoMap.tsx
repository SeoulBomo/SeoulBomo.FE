"use client";
import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";

export default function KakaoMap({
  lat,
  lng,
}: {
  lat: number | undefined;
  lng: number | undefined;
}) {
  const { loading, error } = useInjectKakaoMapApi({
    appkey: `${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`,
  });
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Map
        className="px-[0rem] sm:px-[15rem] md:px-[25rem] lg:px-[32rem] py-[10rem]"
        center={{ lat: lat ?? 33.5563, lng: lng ?? 126.795841 }}
        level={1}
      >
        <MapMarker position={{ lat: lat ?? 33.5563, lng: lng ?? 126.795841 }} />
      </Map>
    </>
  );
}
