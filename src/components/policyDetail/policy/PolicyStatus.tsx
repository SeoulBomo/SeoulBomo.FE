export default function PolicyStatus() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          보육 정책 현황
        </text>
      </div>

      <div className="bg-white border-r-2 border-b-2 border-slate-300 py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[3rem] rounded-[1rem] flex flex-col justify-start gap-[2rem]">
        <section className="flex flex-col">
          <text className="text-xl lg:text-2xl font-bold">
            연도별 어린이집 현황
          </text>
          <table className="table-fixed text-xs lg:text-sm text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-sm lg:text-base text-gray-700  bg-gray-100 ">
              <tr>
                <th scope="col" className="lg:px-6 py-3">
                  연도
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2014
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2015
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2016
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2017
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2018
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2019
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2020
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="lg:px-6 py-1 font-medium text-gray-900 bg-gray-100"
                >
                  개소수(개)
                </th>
                <td className="lg:px-6 py-4 hidden lg:table-cell">43,742</td>
                <td className="lg:px-6 py-4 hidden lg:table-cell">42,517</td>
                <td className="lg:px-6 py-4">41,084</td>
                <td className="lg:px-6 py-4">40,238</td>
                <td className="lg:px-6 py-4">39,171</td>
                <td className="lg:px-6 py-4">37,371</td>
                <td className="lg:px-6 py-4">35,352</td>
              </tr>
            </tbody>
          </table>
          <text className="text-sm lg:text-base">
            출처 : 보육통합정보서비스
          </text>
        </section>
        <section className="flex flex-col">
          <text className="text-xl lg:text-2xl font-bold">
            연도별 어린이집 이용아동 현황
          </text>
          <table className="table-fixed text-xs lg:text-sm text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-sm lg:text-base text-gray-700  bg-gray-100 ">
              <tr>
                <th scope="col" className="lg:px-6 py-3">
                  연도
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2014
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2015
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2016
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2017
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2018
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2019
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2020
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="lg:px-6 py-4 font-medium text-gray-900 bg-gray-100"
                >
                  인원(명)
                </th>
                <td className="lg:px-6 py-4 hidden lg:table-cell">1,496,671</td>
                <td className="lg:px-6 py-4 hidden lg:table-cell">1,452,813</td>
                <td className="lg:px-6 py-4">1,451,215</td>
                <td className="lg:px-6 py-4">1,450,243</td>
                <td className="lg:px-6 py-4">1,415,742</td>
                <td className="lg:px-6 py-4">1,365,085</td>
                <td className="lg:px-6 py-4">1,244,396</td>
              </tr>
            </tbody>
          </table>
          <text className="text-sm lg:text-base">
            출처 : 보육통합정보서비스
          </text>
        </section>
        <section className="flex flex-col">
          <text className="text-xl lg:text-2xl font-bold">
            연도별 가정양육수당 지원아동 현황
          </text>
          <table className="table-fixed text-xs lg:text-sm text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-sm lg:text-base text-gray-700  bg-gray-100 ">
              <tr>
                <th scope="col" className="lg:px-6 py-3">
                  연도
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2014
                </th>
                <th scope="col" className="lg:px-6 py-3 hidden lg:table-cell">
                  2015
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2016
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2017
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2018
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2019
                </th>
                <th scope="col" className="lg:px-6 py-3">
                  2020
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="lg:px-6 py-4 font-medium text-gray-900 bg-gray-100"
                >
                  인원(명)
                </th>
                <td className="lg:px-6 py-4 hidden lg:table-cell">1,012,336</td>
                <td className="lg:px-6 py-4 hidden lg:table-cell">1,009,346</td>
                <td className="lg:px-6 py-4">933,153</td>
                <td className="lg:px-6 py-4">836,290</td>
                <td className="lg:px-6 py-4">745,677</td>
                <td className="lg:px-6 py-4">658,450</td>
                <td className="lg:px-6 py-4">642,095</td>
              </tr>
            </tbody>
          </table>
          <text className="text-sm lg:text-base">
            출처 : 사회보장정보시스템(행복e음)
          </text>
        </section>
      </div>
    </main>
  );
}
