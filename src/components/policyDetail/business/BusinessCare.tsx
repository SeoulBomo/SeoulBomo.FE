export default function BusinessCare() {
  return (
    <main>
      {/* 타이틀 */}
      <div className=" bg-yellowColor rounded-[0.7rem] w-[18.9rem] h-[5.6rem] flex items-center justify-center mt-[6rem] mb-[4rem]">
        <text className="font-bold text-2xl">시간제 보육</text>
      </div>

      <div className="  bg-white border-r-2 border-b-2 border-slate-300 w-[70rem] py-[2rem] pl-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col">
        <text className="text-2xl font-semibold">시간제 보육</text>
        <text className="text-lg font-normal leading-8 pt-3">
          시간제보육 :가정양육가구(양육수당(현금) 또는 가정양육수당 수급 중)가
          긴급･일시적으로 보육시설 이용이 필요한 경우 <br />
          필요한 시간만큼 시간당 일정 비용(1천원)을 지불하고 이용하는 보육서비스
          <br />
          신청방법 : 온라인신청(아이사랑포털 www.childcare.go.kr), 전화예약 ☎
          1661-9361
        </text>
      </div>
    </main>
  );
}