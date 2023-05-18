export default function BusinessBenefit() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          가정양육수당
        </text>
      </div>
      {/* 본문 */}
      <div className="bg-white border-r-2 border-b-2 border-slate-300 py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">가정양육수당</text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          지원대상 : 어린이집·유치원(특수학교 포함)·종일제아이돌봄 서비스를
          <br />
          이용하지 않는 취학전 최대 86개월 미만 영유아(소득 무관 전계층)
          <br /> * 2022년생부터는 24개월부터 가정양육수당 지원
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          지원금액(표):86개월
        </text>
        <section>
          <table className="table-fixed text-sm lg:text-base text-left text-gray-500 px-1 lg:px-3 py-3 mt-[1rem]">
            <thead>
              <tr>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  연령(개월)
                </th>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  양육수당
                </th>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  연령(개월)
                </th>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  농어촌 양육수당
                </th>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  연령(개월)
                </th>
                <th className="text-gray-700 bg-gray-100 px-1 lg:px-3 py-3">
                  장애아동 양육수당
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  0~11
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  200천원
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  0~11
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  200천원
                </td>
                <td
                  rowSpan={3}
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                >
                  0~35
                </td>
                <td
                  rowSpan={3}
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                >
                  200천원
                </td>
              </tr>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  12~23
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  150천원
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  12~23
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  177천원
                </td>
              </tr>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  24~35
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  24~35
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  156천원
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={4}
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                >
                  36 개월 이상 <br /> 86개월 미만
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  36~47
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  129천원
                </td>
                <td
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                  rowSpan={4}
                >
                  36개월 이상 <br />
                  86개월 미만
                </td>
                <td
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                  rowSpan={4}
                >
                  100천원
                </td>
              </tr>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
                <td
                  className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3"
                  rowSpan={3}
                >
                  48개월 이상 <br />
                  86개월미만
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
              </tr>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
              </tr>
              <tr>
                <td className="text-gray-700 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
                <td className="text-gray-7 bg-white border-r-2 border-b-2 border-slate-300 px-1 lg:px-3 py-3">
                  100천원
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
