export default function PolicyExpansion() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          국공립어린이집 활동
        </text>
      </div>

      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">우선 설치지역</text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 border-l-4 border-yellow-200 pl-2">
          저소득 주민 밀집 주거지역, 농어촌지역 등 취약지역 및 산업단지
          지역(영유아보육법 제12조 제1항)<br></br>
          아동수, 접근성, 저소득층 비율 및 어린이집 공급 현황 등을 고려한
          종합적인 분석을 토대로 우선 설치 필요지역 선정
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-10">
          의무 설치지역
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 border-l-4 border-yellow-200 pl-2">
          지방자치단체는 500세대 이상 공동주택에 설치되는 의무어린이집은
          국공립으로 운영해야 함(법 제12조 제3항)
          <br />
          ’19.9.25. 이후 사용검사를 신청하는 공동주택부터 적용
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-10">
          다양한 확충 방식 지원 등을 통해 효율적인 확충 추진
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 border-l-4 border-yellow-200 pl-2">
          매입, 장기임차 방식(’18~) 등 기존 시설 전환 적극 활용
          <br />
          공동주택 관리동 2층, 공공업무시설 5층까지 국공립어린이집 설치
          허용(’18.2월, 시행규칙 개정)
          <br />
          신규 500세대 이상 공동주택 내 국공립어린이집 설치 의무화(’19.6월, 법
          및 시행령 개정)
        </text>
      </div>
    </main>
  );
}
