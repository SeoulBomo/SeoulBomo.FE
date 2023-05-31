"use client";
import { useEffect } from "react";
import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";

export default function KakaoMap({
  lat,
  lng,
}: {
  lat: number | string | undefined;
  lng: number | string | undefined;
}) {
  if (!lat || !lng) return <></>;

  if (typeof lat === "string") lat = parseFloat(lat);
  if (typeof lng === "string") lng = parseFloat(lng);

  const { loading, error } = useInjectKakaoMapApi({
    appkey: `${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}`,
  });

  if (loading || error) return <></>;

  return (
    <>
      <Map
        className="px-[0rem] sm:px-[15rem] md:px-[25rem] lg:px-[32rem] py-[10rem]"
        center={{ lat: lat, lng: lng }}
        level={1}
      >
        <MapMarker position={{ lat: lat, lng: lng }} />
      </Map>
    </>
  );
}
