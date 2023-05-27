import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap({ lat, lng }: { lat: number; lng: number }) {
  console.log(lat, lng);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Map
        className="lg:px-[19.5rem] py-[10rem]"
        center={{ lat: lat, lng: lng }}
      >
        <MapMarker position={{ lat: lat, lng: lng }} />
      </Map>
    </>
  );
}
