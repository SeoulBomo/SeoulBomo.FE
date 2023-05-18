export default function CareExtension() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          그 밖의 연장형 보육
        </text>
      </div>

      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          그 밖의 연장형 보육
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 lg:leading-8 pt-3">
          늦은 시간, 휴일에도 어린이집을 이용할 수 있도록 제공되는 보육서비스
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 lg:leading-8 pt-3">
          그 밖의 연장형 보육반을 운영 중인 어린이집 찾는 방법 -
          아이사랑포털(www.childcare.go.kr) 접속 후 메뉴 중
          <br />
          [어린이집] ➡️ [어린이집 찾기] 클릭 ➡️ 지역(시도 및 시군구) 입력 후
          <br /> 특성 ‘야간연장’, ‘휴일보육’, ‘24시간’ 중 선택
        </text>
      </div>
    </main>
  );
}
