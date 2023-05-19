export default function PolicyHistory() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          보육 정책 연혁
        </text>
      </div>
      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-lg lg:text-xl font-semibold leading-[3rem] lg:leading-[4rem] border-l-4 border-yellow-200 pl-[1rem]">
          저소득층 자녀위주의 탁아사업(1921)
          <br />
          「유아교육진흥법」제정, 새마을유아원 운영(1982)
          <br />
          「남녀고용평등법」에 따라 직장 탁아제 도입(1987)
          <br />
          「영유아보육법」을 제정, ‘탁아’에서 ‘보육’으로 전환(1991)
          <br />
          제1차 중장기보육기본계획 ‘새싹플랜’ (2006~2008, 여성가족부) - 여성의
          사회진출 증가에 대응한 보육서비스 공급 중점
          <br />
          제1차 중장기보육기본계획을 보완한 ’아이사랑플랜’ (2009~2012,
          보건복지부) - 국가책임 강화, 보육서비스를 ’영유아’ 중심으로 설정
          <br />
          제2차 중장기보육기본계획(2013~2017) - 무상보육 도입과 수요자 맞춤 지원
          중점
          <br />
          보육료·양육수당 全계층 지원 실시(2013)
          <br />
          3~5세 공통의 보육·교육과정인 ’누리과정’ 도입(2013)
          <br />
          입소대기시스템(전산화) 도입(2014)
          <br />
          모든 어린이집에 CCTV 설치(2015)
          <br />
          임신·출산·육아 관련 웹사이트 통합, ‘아이사랑’ 포털(2015)
          <br />
          ‘맞춤형보육‘ 도입·시행(2016)
          <br />
          제3차 중장기보육기본계획(2018~2022) - 보육의 공공성 강화, 효과적
          보육서비스 제공을 위한 보육체계개편, 보육서비스의 품질향상,
          부모양육지원 확대
          <br />
        </text>
      </div>
    </main>
  );
}
