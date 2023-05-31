"use client";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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
