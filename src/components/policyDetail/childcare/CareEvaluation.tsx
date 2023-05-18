import Image from "next/image";

export default function CareEstimate() {
  return (
    <main>
      {/* 타이틀 */}
      <div className=" bg-yellowColor rounded-[0.7rem] w-[18.9rem] h-[5.6rem] flex items-center justify-center mt-[6rem] mb-[4rem]">
        <text className="font-bold text-2xl">어린이집 평가제</text>
      </div>

      <div className=" bg-white w-[70rem] py-[2rem] pl-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col">
        <text className="text-2xl font-semibold">어린이집 평가제</text>
        <text className="text-lg font-normal leading-8 pt-3">
          어린이집 평가제도는 보육·양육에 대한 사회적 책임강화 실현 및 안심
          보육환경 조성을 위해
          <br /> 국가 차원에서 모든 어린이집을 주기적으로 평가하여 상시적인
          보육서비스의 질을 확보하고자 하는 제도
          <br />
          <br /> ◼️2004.1~ : 어린이집 평가인증 제도 도입근거 마련(영유아보육법
          제30조)
          <br />
          ◼️2005.1~ : 어린이집 평가인증 시범운영 실시
          <br />
          ◼️2006.1~ : 제1차 어린이집 평가인증 실시
          <br />
          ◼️2010.2~ : 제2차 어린이집 평가인증 실시
          <br />
          ◼️2014.11~ : 제3차 어린이집 평가인증 시범사업 실시
          <br />
          ◼️2017.11~ : 제3차 어린이집 평가인증(통합지표) 시행
          <br />
          ◼️2019.6~ : 어린이집 평가제 시행
          <br />
          <br />
          영유아보육법 제30조에 근거하여 모든 어린이집이 지표를 기준으로 질적
          수준을 자체적으로 점검·개선하도록 한 후, <br />
          평가과정을 수행하여 평가 등급 부여( A, B, C, D 등급)
        </text>
        <text className="text sm font-bold pt-[2rem]">
          평가등급의 기준 및 평가주기
        </text>
        <section className="mt-[4rem]">
          <table className=" text-lg text-left text-gray-500 mt-[1.5rem] ">
            <thead className="text-lg text-gray-700  bg-gray-100">
              <tr>
                <th className=" px-5 py-5 ">등급</th>
                <th className=" px-5 py-5 ">등급구분 (정의)</th>
                <th className=" px-5 py-5 ">등급 부여기준</th>
                <th className=" px-5 py-5 ">평가주기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-100 px-3 py-3">A</th>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  국가 평가에서 제시하고 있는 기준을
                  <br /> 모든 영역에서 충족함
                </td>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  4개 영역 모두 ‘우수’인 경우
                  <br />
                  (필수 지표 및 요소 충족)
                </td>
                <td
                  rowSpan={2}
                  className="bg-white px-3 py-3 border-b border-slate-200"
                >
                  3년
                </td>
              </tr>
              <tr>
                <th className="bg-gray-100 px-3 py-3 ">B</th>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  국가 평가에서 제시하고 있는 기준을
                  <br /> 대부분 충족함
                </td>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  ‘우수’ 영역이 3개 이하이며
                  <br /> ‘개선 필요’ 영역이 없는 경우
                </td>
              </tr>
              <tr>
                <th className="bg-gray-100 px-3 py-3">C</th>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  국가 평가에서 제시하고 있는 기준 대비
                  <br /> 부분적으로 개선이 필요함
                </td>
                <td className="bg-white px-3 py-3 border-b border-slate-200 border-r">
                  ‘개선 필요’ 영역이 1개 있는 경우
                </td>
                <td className="bg-white px-3 py-3 " rowSpan={2}>
                  2년
                </td>
              </tr>
              <tr>
                <th className="bg-gray-100 px-3 py-3 ">D</th>
                <td className="bg-white px-3 py-3  border-slate-200 border-r">
                  국가 평가에서 제시하고 있는 기준 대비
                  <br /> 상당한 개선이 필요함
                </td>
                <td className="bg-white px-3 py-3  border-slate-200 border-r">
                  ‘개선 필요’ 영역이 2개 이상인 경우
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-md font-normal leading-10">
          4개 영역, 18개 지표, 59개 평가항목에 대해 평가
          <br />
          어린이집 평가 운영체계
        </text>
        <Image
          className="h-[65rem] w-[65rem] my-[4rem]"
          src="/images/careEstimate1.gif"
          width={1000}
          height={1000}
          alt="이미지"
        />
        <text className="text-lg font-medium leading-10 ">
          결과 공표
          <br />
          평가결과(A~D등급) 등 전체 어린이집에 대한 평가 이력정보를
          <a
            href="www.childinfo.go.kr"
            className="no-underline hover:underline"
          >
            통합정보공시 홈페이지 (www.childinfo.go.kr)
          </a>
          를 통해 공개
        </text>
        <section className="mt-[1rem]">
          <table className=" text-lg text-left text-gray-500 mt-[1.5rem] ">
            <thead className="text-lg text-gray-700  bg-gray-100">
              <tr className="px-4 py-4">
                <th colSpan={2} className="px-4 py-4">
                  구분
                </th>
                <th className="px-4 py-4">결과공표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  className="bg-gray-100 px-3 py-3 border-b-2 border-slate-200"
                  rowSpan={4}
                >
                  평가제 시행 이후 평가정보
                </th>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  평가결과 A~D등급
                </td>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  A등급, B등급, C등급, D등급
                </td>
              </tr>
              <tr>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  평가 이후 법위반 행정처분 발생
                </td>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  D등급(등급조정)*
                </td>
              </tr>
              <tr>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  평가이후 변동사항 발생 <br /> (대표자변경, 6개월 이상 운영중단
                  후 재개)
                </td>
                <td className="bg-white  border-2 border-slate-200 px-3 py-3">
                  평가예정**
                </td>
              </tr>
              <tr>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  신규개원
                </td>
                <td className="bg-white border-2 border-slate-200 px-3 py-3">
                  평가예정**
                </td>
              </tr>
              <tr>
                <th
                  className="bg-gray-100 px-3 py-3 border-r-2 border-slate-200"
                  rowSpan={3}
                >
                  평가제 시행 이전 인증정보
                </th>
                <td className="bg-white border-2 border-slate-200  px-3 py-3">
                  미인증(평가참여 이력 없음)
                </td>
                <td className="bg-white px-3 py-3 border-2 border-slate-200">
                  -
                </td>
              </tr>
              <tr>
                <td className="bg-white px-3 py-3 border-2 border-slate-200">
                  인증유지
                </td>
                <td className="bg-white px-3 py-3 border-2 border-slate-200">
                  (평가제 결과 확정 이전까지 기존 공표 내용 유지)
                </td>
              </tr>
              <tr>
                <td className="bg-white px-3 py-3 border-r-2 border-slate-200">
                  인증취소·인증종료·인증유효기간만료
                </td>
                <td className="bg-white px-3 py-3 border-r-2 border-slate-200">
                  {" "}
                  인증취소/인증조료/인증 유효기간 만료
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-md font-normal leading-10 ">
          * D등급(등급조정)은 통합정보공시 홈페이지 최하위 등급 조정에 포함되는
          사유 안내
          <br />* ‘평가예정’은 신규개원, 대표자변경, 6개월 이상 운영 중단 후
          재개 시 운영재개일로부터 1년 경과 후 평가 예정
        </text>
      </div>
    </main>
  );
}
