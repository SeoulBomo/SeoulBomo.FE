import { CheckIcon } from "@heroicons/react/24/outline";

export default function PolicyProfessional() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          보육인력의 전문성 제고
        </text>
      </div>

      <div className="bg-white border-r-2 border-b-2 border-slate-300 py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          보육인력 전문성 제고를 위한 자격 및 양성교육 체계 개선
        </text>
        <text className="text-lg lg:text-xl font-medium leading-[2rem] lg:leading-[3rem] pt-3 border-l-4 border-yellow-200 pl-2">
          보육교사 양성을 위한 교과목 중 필수 대면 교과목(9과목) 지정, 현장실습
          강화(‘16. 8월)
          <br />
          자격 취득 교과목 수와 경력기간 등 상향 조정(‘14. 3월)<br></br>
          보육실습기관 기준 강화(‘13. 3월)<br></br>
        </text>
      </div>
    </main>
  );
}
