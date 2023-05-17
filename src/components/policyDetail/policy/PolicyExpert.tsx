export default function PolicyExpert() {
  return (
    <main>
      {/* 타이틀 */}
      <div className=" bg-yellowColor rounded-[0.7rem] w-[18.9rem] h-[5.6rem] flex items-center justify-center mt-[6rem] mb-[4rem]">
        <text className="font-bold text-2xl">보육인력의 전문성 제고</text>
      </div>

      <div className=" bg-white w-[70rem] py-[2rem] pl-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col">
        <text className="text-2xl font-semibold">
          보육인력 전문성 제고를 위한 자격 및 양성교육 체계 개선
        </text>
        <text className="text-xl font-medium leading-8 pt-3">
          보육교사 양성을 위한 교과목 중 필수 대면 교과목(9과목) 지정, 현장실습
          강화(‘16. 8월)<br></br>
          자격 취득 교과목 수와 경력기간 등 상향 조정(‘14. 3월)<br></br>
          보육실습기관 기준 강화(‘13. 3월)<br></br>
        </text>
      </div>
    </main>
  );
}
