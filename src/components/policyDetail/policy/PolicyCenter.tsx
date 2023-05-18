export default function PolicyCenter() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          육아종합지원센터
        </text>
      </div>
      {/* 본문 */}
      <div className="bg-white border-r-2 border-b-2 border-slate-300 py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          육아종합지원센터
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-3">
          육아종합지원센터 : 보육에 관한 정보의 수집·제공 및 상담 등을 제공하기
          위하여 <br />
          보건복지부장관과 지방자치단체의 장이 설치·운영하는 육아지원전문기관
        </text>
        <section className="mt-[1rem]">
          <table className="table-fixed text-base lg:text-lg text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-base lg:text-lg text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  어린이집 대상 지원
                </th>
                <th scope="col" className="px-6 py-3">
                  부모 대상 지원
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">
                  - 보육컨설팅
                  <br />
                  - 보육교직원 상담 및 교육
                  <br /> - 아동학대 예방교육
                  <br />
                  -대체교사 지원 및 관리
                  <br /> - 취약보육 지원 및 관리
                </td>
                <td className="px-6 py-4">
                  - 초기부모 양육상담
                  <br />
                  - 부모교육
                  <br />
                  - 영유아 놀이공간 및 프로그램 제공
                  <br />
                  - 장난감 및 도서 대여 서비스
                  <br />- 시간제 보육서비스 제공
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
