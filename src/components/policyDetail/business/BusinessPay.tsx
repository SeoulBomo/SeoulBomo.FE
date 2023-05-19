export default function BusinessPay() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-xl lg:text-2xl">
          영유아보육료 지원
        </text>
      </div>
      {/* 본문 */}
      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          영유아보육료 지원
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          지원대상 : 어린이집을 이용하는 영유아(0~5세반)로 국적과 주민등록번호를
          유효하게 보유하고 있는 자(소득 무관 전계층)
          <br />
          지원금액 및 적용시기
        </text>
        (월 기준, 단위: 천원)
        <section className="mt-[3rem]">
          <table className="table-fixed text-sm lg:text-base text-left text-gray-500 lg:px-3 py-3">
            <thead>
              <tr>
                <th
                  rowSpan={3}
                  className="text-gray-700 bg-gray-100 lg:px-4 py-4"
                >
                  구분
                </th>
                <th
                  colSpan={5}
                  className="text-gray-700 bg-gray-100 lg:px-3 py-3"
                >
                  연령 (적용시기)
                </th>
              </tr>

              <tr>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">
                  0세반 (23.1.1~)
                </th>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">
                  1세반 (23.1.1~)
                </th>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">
                  2세반 (23.1.1~)
                </th>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">
                  3~5세반 (23.1.1~2.28)
                </th>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">
                  3~5세반 (23.3.1~)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="text-gray-700 bg-gray-100 lg:px-3 py-3">계</th>
                <td className="text-gray-700 bg-white lg:px-3 py-3">1,113</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">778</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">596</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">280</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">280</td>
              </tr>
              <tr>
                <th className="text-gray-700 bg-gray-100  lg:px-3 py-3">
                  부모보육료
                </th>
                <td className="text-gray-700 bg-white lg:px-3 py-3">514</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">452</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">375</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">280</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">280</td>
              </tr>
              <tr>
                <th className="text-gray-700 bg-gray-100  lg:px-3 py-3">
                  기관보육료
                </th>
                <td className="text-gray-700 bg-white lg:px-3 py-3">599</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">326</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">221</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">-</td>
                <td className="text-gray-700 bg-white lg:px-3 py-3">-</td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="font-light leading-8 pt-[2rem]">
          * 기관보육료: 정부에서 인건비를 지원받지 않는 민간․ 가정어린이집에서
          만0～2세 및 장애아동 보육 시 지원
          <br />* 기본보육에 대한 보육료를 지원하고, 추가적 돌봄이 필요한
          영유아가 <br />
          연장보육 이용시 시간당 연장보육료를 추가 지원
          <br />
          (영아반 2,000원, 유아반 1,000원, 0세반·장애아 3,000원)
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          보육지원 신청
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-[1rem]">
          (보육료⇔양육수당) 15일 이전 신청시 신청월은 변경서비스 지원, 16일 이후
          신청시 신청월은 기존 서비스 지원, 익월 1일부터 변경서비스 지원
          <br />
          (보육료⇔유아학비) 변경신청일로부터 변경서비스 지원
          <br />* 서비스 변경에 대한 자세한 사항은 관할 주민센터,
          보건복지콜센터(☎129)로 문의
        </text>
      </div>
    </main>
  );
}
