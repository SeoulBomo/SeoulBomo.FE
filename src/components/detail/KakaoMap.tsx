import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap({ lat, lng }: { lat: number; lng: number }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=38dab52ec8014cb1db58fc7fd6478faa&autoload=false"
        strategy="beforeInteractive"
      />
      <Map className="lg:px-[20rem] py-[10rem]" center={{ lat: lat, lng: lng }}>
        <MapMarker position={{ lat: lat, lng: lng }} />
      </Map>
    </>
  );
}
