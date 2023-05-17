export default function BusinessInfantBenefit() {
  return (
    <main>
      {/* 타이틀 */}
      <div className=" bg-yellowColor rounded-[0.7rem] w-[18.9rem] h-[5.6rem] flex items-center justify-center mt-[6rem] mb-[4rem]">
        <text className="font-bold text-2xl">영아수당</text>
      </div>

      <div className="  bg-white border-r-2 border-b-2 border-slate-300 w-[70rem] py-[2rem] pl-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col">
        <text className="text-2xl font-semibold">지원대상</text>
        <text className="text-lg font-normal leading-8 pt-3">
          만 0~1세아동(2022년생부터)
        </text>
        <text className="text-2xl font-semibold pt-[5rem]">지원내용</text>
        <text className="text-lg font-normal leading-8 pt-3">
          가정양육 시 현금 지원, 어린이집 이용 시 보육료 지원, 종일제아이돌봄
          이용 시<br /> 종일제 아이돌봄 정부지원금(가,나, 다형)지원 중 한 가지
          서비스 지원
          <br />
          현금,보육료,아이돌봄서비스 중 한 가지 서비스만 수급할 수 있으며, 동시
          지원 불가(서비스 간 변경 가능)
        </text>
        <section className="mt-[3rem]">
          <table className=" text-md text-left text-gray-500  px-3 py-3">
            <thead>
              <tr>
                <th className=" text-md text-left text-gray-700  bg-gray-100  px-3 py-3">
                  지원서비스
                </th>
                <th className=" text-md text-left text-gray-700  bg-gray-100  px-3 py-3">
                  영아수당(현금){" "}
                </th>
                <th className=" text-md text-left text-gray-700  bg-gray-100  px-3 py-3">
                  보육료{" "}
                </th>
                <th className=" text-md text-left text-gray-700  bg-gray-100  px-3 py-3">
                  종일제아이돌봄
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className=" text-md text-left text-gray-700  bg-gray-100  px-3 py-3">
                  지원방법
                </th>
                <td className=" text-md text-left text-gray-700  bg-white  px-3 py-3">
                  30만원
                </td>
                <td className=" text-md text-left text-gray-700  bg-white  px-3 py-3">
                  이용권(바우처)
                </td>
                <td className=" text-md text-left text-gray-700  bg-white  px-3 py-3">
                  이용권(바우처)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
