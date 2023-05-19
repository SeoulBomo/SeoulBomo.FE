import Image from "next/image";

export default function PolicyReform() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          보육지원체계 개편
        </text>
      </div>

      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">주요내용</text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 ">
          (보육시간의 구분) <br />
          어린이집 12시간(07:30~19:30) 운영 원칙은 유지하면서, 어린이집
          보육시간을 2개의 시간으로 구분
          <br />
          모든 영유아에게 적용되는 ‘기본보육시간’과 기본보육시간 이후 돌봄공백이
          우려되는 영유아에게 적용되는 ‘연장보육시간’으로 구분
          <br />
          (과정별 개별 지원체계)
          <br /> 각 보육과정에 대해 비용지원방식을 별도 적용하여 충실히 운영될
          수 있도록 어린이집 지원방식 합리화
          <br />
          특히, 연장보육시간에 안정적인 보육이 제공되도록 전담교사를 배치
          <br />
        </text>
        <Image
          className="h-[35rem]"
          src="/images/reform1.jpg"
          width={1000}
          height={1000}
          alt="이미지"
        />

        <section>
          <table className="text-base lg:text-lg text-left text-gray-500 mt-[1.5rem] ">
            <thead className="text-base lg:text-lg text-gray-700  bg-gray-100 ">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-5  border-b border-slate-200 text-center"
                  colSpan={2}
                >
                  기본보육과 연장보육 구분, 연장보육 전담 교사 배치
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-white border-r-2 border-slate-200 border-b  ">
                  영유아 : 낮 근무로 피로한 당번교사가 아니라 <br />
                  고정된 전담교사가 돌봄으로써 안정감 및 보육질 향상
                </td>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-white border-b border-slate-200">
                  부모 : 연장 보육이 필요한 부모가 안정적으로 연장 보육 서비스
                  이용
                </td>
              </tr>
              <tr>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-white border-r-2 border-slate-200 ">
                  어린이집 : 장시간 보육 운영 부담 완화
                </td>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-white">
                  교사 : 업무 부담 및 근무 환경 개선
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          0~2세반 연장보육 자격 기준 안내
        </text>
        <text className="text-lg lg:text-xl font-medium pt-4">배경</text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-1">
          ’20년 보육지원체계 개편에 따른 연장보육 자격 기준에 대한 <br />
          지자체 및 부모의 이해도를 높여 0~2세반 연장보육 자격 신청의 편의 도모
          필요
        </text>
        <text className="text-lg lg:text-xl font-medium pt-4">
          0~2세반 연장보육 자격 기준
        </text>
        <text className="text-base lg:text-lg font-normal leading-8 pt-1">
          (자격기준) 기존 종일반 자격과 대체로 동일하나
          <br />
          * 기존 종일반 자격 아동은 ’20.3월 연장보육 자격으로 자동전환 예정,
          별도로 시군구에 연장보육 자격 신청 불필요
          <br />
          주요 민원․개선요구사항 등을 반영하여 연장보육 자격 확대 개선 필요
        </text>
        <text className="text-lg lg:text-xl font-medium pt-5">
          연장보육 자격의 주요 확대 개선 사항
        </text>
        <section className="mt-[4rem]">
          <text className="text-xl lg:text-2xl font-semibold">
            보육료 및 아이행복카드 신청 구비서류
          </text>
          <table className="text-base lg:text-lg text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-base lg:text-lg text-gray-700  bg-gray-100 text-center">
              <tr>
                <th scope="col" className="px-4 py-3" colSpan={2}>
                  자격구분
                </th>
                <th scope="col" className="px-4 py-3">
                  종일반 자격(~’20.2월)
                </th>
                <th scope="col" className="px-4 py-3 ">
                  연장보육 자격(’20.3월~)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" colSpan={2}>
                  단시간근로자
                  <br />
                  (주 15시간 미만)
                </td>
                <td className="px-4 py-4">신설</td>
                <td className="px-4 py-4">
                  근로계약서, 근무확인서 등<br />* 연장보육시간(16:00~19:30)에
                  근무사실 확인 필요
                </td>
              </tr>

              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" colSpan={2}>
                  예술인
                </td>
                <td className="px-4 py-4">신설</td>
                <td className="px-4 py-4">예술활동증명확인서</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" rowSpan={3}>
                  구직자
                </td>
                <td className="px-4 py-4 bg-gray-100">구직등록</td>
                <td className="px-4 py-4">
                  구직등록확인증 + 구직활동 증빙 (1회 한정)
                </td>
                <td className="px-4 py-4">구직등록확인증(1회 한정)</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100">학원 수강</td>
                <td className="px-4 py-4">신설</td>
                <td className="px-4 py-4">학원수강증 (1회 한정)</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100">구직활동</td>
                <td className="px-4 py-4">신설</td>
                <td className="px-4 py-4">
                  임용(채용)시험․국가자격시험의 접수증(응시표)
                  <br /> 또는 면접확인서
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" colSpan={2}>
                  다자녀
                </td>
                <td className="px-4 py-4 ">가족관계증명서(자녀 3명 이상)</td>
                <td className="px-4 py-4">가족관계증명서(자녀 2명 이상)</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" rowSpan={2}>
                  학업
                </td>
                <td className="px-4 py-4 bg-gray-100">재학</td>
                <td className="px-4 py-4">
                  재학증명서, 연구생증명서 * <br />
                  방통대, 사이버대 등 원격대학 제외
                </td>
                <td className="px-4 py-4">
                  재학증명서, 연구생증명서 * <br />
                  방통대, 사이버대 등 원격대학 포함
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100">학위과정</td>
                <td className="px-4 py-4">신설</td>
                <td className="px-4 py-4">
                  논문심사의뢰서
                  <br />
                  (접수일 기준 1개월 내 유효, 1회 한정)
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" colSpan={2}>
                  육아 휴직 복직
                </td>
                <td className="px-4 py-4">
                  복직예정신고서
                  <br />* 복직예정일부터 복직예정일 익월 말일까지
                </td>
                <td className="px-4 py-4">
                  복직예정신고서
                  <br />
                  * 신청일부터 복직예정일 익월 말일까지
                  <br />
                  (복직예정일의 30일 전부터 신청 가능)
                  <br />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-4 bg-gray-100" colSpan={2}>
                  기타 사유
                </td>
                <td className="px-4 py-4">종일반 사유 확인서 + 자기기술서</td>
                <td className="px-4 py-4">연장보육 신청 사유서</td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          0~2세반 연장보육 자격 기준별 증빙자료
        </text>
        <section className="mt-[4rem]">
          <text className="text-xl lg:text-2xl font-semibold">
            보육료 및 아이행복카드 신청 구비서류
          </text>
          <table className="text-base lg:text-lg text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-base lg:text-lg text-gray-700 bg-gray-100 text-center"></thead>
            <thead>
              <tr>
                <th scope="col" colSpan={4} className="px-4 py-4 bg-gray-100">
                  연장반 자격기준
                </th>
                <th scope="col" className="px-4 py-4 bg-gray-100">
                  증빙자료
                </th>
                <th scope="col" className="px-4 py-4 bg-gray-100">
                  자격 책정
                </th>
                <th scope="col" className="px-4 py-4 bg-gray-100">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  rowSpan={9}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  취업
                </td>
                <td
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  임금 근로자 (주 15H 이상)
                </td>
                <td
                  colSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  4대보험 가입자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  건강보험, 고용보험
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  시스템 연계
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  -
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  4대보험
                  <br />
                  미가입자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  근로계약서, <br />
                  고용근로확인서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  1년
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  단시간근로자
                  <br />
                  (주 15H 미만)
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  근로계약자 등<br />
                  (16:00~19:30 근무확인
                  <br />
                  필요)
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  계약기간 내
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  자영업자
                  <br />
                  특수형태근로자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  사업자등록증명원
                  <br />
                  +소득증빙
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  매년 7월 <br />
                  재증빙
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  rowSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  농어업인
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  농어업인
                  <br />
                  확인서
                </td>
                <td
                  rowSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  자료제출
                </td>
                <td
                  rowSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  1년
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  농어업경영체
                  <br />
                  등록증명서
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  선원승선신고
                  <br />
                  사실확인서
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  예술인
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  예술활동
                  <br />
                  증명확인서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  유효기간
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  무급가족
                  <br />
                  종사자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  연장보육
                  <br /> 신청 사유서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  1년
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={5}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  구직
                </td>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  구직급여
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  구직급여 <br />
                  수급자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  시스템 연계
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"></td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  직업훈련수강증
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  직업능력개발
                  <br />
                  훈련과정수강증
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  수강기간
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  구직등록 확인증
                  <br /> 학원수강증
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  구직등록
                  <br />
                  확인증
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  등록기간
                  <br />
                  (1회만 가능)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  학원
                  <br />
                  수강증
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  수강기간
                  <br />
                  (1회만 가능)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  임용․채용시험 국가자격시험 응시
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  임용시험
                  <br />
                  /국가자격시험의
                  <br /> 접수증․응시표 등
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  1년
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={5}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  가구특성
                </td>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  다자녀
                  <br />
                  (2인 이상)
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  가족관계
                  <br />
                  등록부
                </td>
                <td
                  rowSpan={5}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  시스템 연계
                </td>
                <td
                  rowSpan={5}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  -
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  한부모가족
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  한부모
                  <br />
                  가족증명서
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  조손가구
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  가족관계
                  <br />
                  등록부
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  다문화가정
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  주민등록등본
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  저소득층
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  생계·의료
                  <br /> 급여
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={9}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  돌봄필요
                </td>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  장애
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  장애인
                  <br />
                  등록증
                </td>
                <td
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  시스템 연계
                </td>
                <td
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  -
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  장기요양·
                  <br />
                  산정특례
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  장기요양
                  <br />
                  인정서
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  입원·간병
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  의사진단서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  입원기간
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  임신
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  임신
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  임신진단서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  임신기간
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  유산
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  임신진단서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  출산예정일이
                  <br /> 속한 달까지
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  학업
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  재학
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  재학증명서
                  <br /> 등 (방통대, 사이버대 등 포함)
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  재학기간
                  <br /> (매학기,
                  <br /> 기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  학위과정
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  논문심사의뢰서
                  <br /> (접수번호․일자
                  <br />
                  기재 필요)
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  1년
                  <br />
                  (1회만 가능)
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  rowSpan={2}
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                >
                  장기 부재
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  군복무
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  군복무
                  <br />
                  확인서
                </td>
                <td
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                  rowSpan={2}
                >
                  자료제출
                </td>
                <td
                  className="px-4 py-4 bg-white border-r-2 border-b border-slate-200"
                  rowSpan={2}
                >
                  복무․재소기간
                  <br /> 내 (기간종료 시 재증빙)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  복역
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  재소증명원
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  육아휴직
                  <br /> 복직자
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  복직예정
                  <br />
                  신고서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  신청일부터 <br />
                  복직예정일의 <br />
                  익월 말일까지 <br />* 복직예정일의 30일
                  <br />
                  전부터 신청 가능
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-4 bg-gray-100 border-r-2 border-b border-slate-200"
                >
                  기타
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  연장보육
                  <br /> 신청 사유서
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  자료제출
                </td>
                <td className="px-4 py-4 bg-white border-r-2 border-b border-slate-200">
                  1년
                  <br />
                  (기간종료 시 재증빙)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
