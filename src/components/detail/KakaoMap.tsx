import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const lat = 33.450701;
  const lng = 126.570667;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=38dab52ec8014cb1db58fc7fd6478faa&autoload=false"
        strategy="beforeInteractive"
      />
      <Map
        center={{ lat: lat, lng: lng }}
        style={{ width: "35rem", height: "15rem" }}
      >
        <MapMarker position={{ lat: lat, lng: lng }} />
      </Map>
    </>
  );
}
