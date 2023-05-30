export default function CareWaitingAdmission() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          어린이집입소대기
        </text>
      </div>

      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          어린이집 입소 대기
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 lg:leading-8 pt-3 border-l-4 border-yellow-200 pl-2">
          어린이집 입소대기 : 입소를 희망하는 어린이집에 입소대기 신청,
          입소우선순위에 따라 입소 결정
          <br />
          입소우선순위 : 돌봄 지원 필요성이 높은 가구의 영유아가 어린이집에
          우선적으로 입소할 수 있도록 점수를 부여
          <br />
          (영유아보육법 제28조 및 시행규칙 제29조)
          <br />
          입소대기 신청 시점 : 연중 수시
          <br />
          입소대기 신청 어린이집 수 : 재원중인 아동 2개소, 미 재원중인 아동
          3개소
          <br />
          입소대기 대상 아동 범위 : 보육나이 만 0세 ~ 만 5세(단, 장애아동은 만
          12세까지 가능)
          <br />
          대상어린이집 : 입소 우선순위를 적용하는 전체어린이집에 대하여 입소대기
          신청 가능(직장, 협동어린이집 제외)
          <br />
          신청방법 : 온라인신청(아이사랑포털 www.childcare.go.kr),
          방문신청(입소를 원하는 어린이집에 직접 방문 신청)
          <br />
        </text>
      </div>
    </main>
  );
}
