export default function BusinessInfantBenefit() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          영아수당
        </text>
      </div>
      {/* 본문 */}
      <div className="bg-white border-r-2 border-b-2 border-slate-300 py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">지원대상</text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          만 0~1세아동(2022년생부터)
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-[2rem]">
          지원내용
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          가정양육 시 현금 지원, 어린이집 이용 시 보육료 지원, 종일제아이돌봄
          이용 시<br /> 종일제 아이돌봄 정부지원금(가,나, 다형)지원 중 한 가지
          서비스 지원
          <br />
          현금,보육료,아이돌봄서비스 중 한 가지 서비스만 수급할 수 있으며, 동시
          지원 불가(서비스 간 변경 가능)
        </text>
        <section className="mt-[3rem]">
          <table className="table-fixed text-sm lg:text-base text-left text-gray-500 px-3 py-3">
            <thead>
              <tr>
                <th className="text-left text-gray-700 bg-gray-100  px-3 py-3">
                  지원서비스
                </th>
                <th className="text-gray-700 bg-gray-100 px-3 py-3">
                  영아수당(현금)
                </th>
                <th className="text-left text-gray-700 bg-gray-100 px-3 py-3">
                  보육료
                </th>
                <th className="text-left text-gray-700 bg-gray-100 px-3 py-3">
                  종일제아이돌봄
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-left text-gray-700 bg-gray-100 px-3 py-3">
                  지원방법
                </th>
                <td className="text-left text-gray-700 bg-white px-3 py-3">
                  30만원
                </td>
                <td className="text-left text-gray-700 bg-white px-3 py-3">
                  이용권(바우처)
                </td>
                <td className="text-left text-gray-700 bg-white px-3 py-3">
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
