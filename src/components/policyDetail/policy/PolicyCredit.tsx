import Image from "next/image";
import Link from "next/link";

export default function PolicyCredit() {
  return (
    <main>
      {/* 타이틀 */}
      <div className="flex items-center justify-center p-[3rem]">
        <text className="bg-yellowColor rounded-[0.7rem] p-[1.5rem] font-bold text-2xl lg:text-3xl">
          아이 행복 카드
        </text>
      </div>
      {/* 본문 */}
      <div className="bg-white shadow-md py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start">
        <text className="text-xl lg:text-2xl font-semibold">
          보육전자바우처 도입(前 아이사랑카드 → 現 아이행복카드)
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          보육 정책의 체감도를 높이고 수요자 중심 보육정책을 실현하기 위하여,
          보육료를 <br /> 어린이집에 지급하는 대신에 전자카드 형태로 부모에게
          직접 지급하여 어린이집을 이용하면서 결제하도록 <br /> 하는
          보육전자바우처(구. 아이사랑카드) 제도 도입 (’ 09.9월∼) 보육전자바우처
          도입 · 시행으로 부모의 정책 체감도가 향상되었으며,
          <br /> 보육료 신청 · 지급 · 정산 등에 수반되는 어린이집과 행정기관의
          업무 부담 대폭 경감
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          아이행복카드(보육료 · 유아학비 지원카드)
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          어린이집 ↔ 유치원 시설간 이동시 카드를 교체해야 하는 부모의 불편을
          개선하고자 ’ 15년부터 우리부 보육료 지원카드인
          <br /> 아이사랑카드와 교육부의 유아학비지원카드인 아이즐거운카드를
          아이행복카드로 통합 아이행복카드를 발급받으면 <br />
          어린이집-유치원 어디서나 정부지원금 결제(인증) 가능
        </text>
        -단, 보육료 또는 유아학비 지원신청 필요
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          아이행복카드(보육료 · 유아학비 지원카드)
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          어린이집 ↔ 유치원 시설간 이동시 카드를 교체해야 하는 부모의 불편을
          개선하고자 <br />
          ’ 15년부터 우리부 보육료 지원카드인 아이사랑카드와 교육부의
          유아학비지원카드인 아이즐거운카드를 아이행복카드로 통합
          <br />
          아이행복카드를 발급받으면 어린이집-유치원 어디서나 정부지원금
          결제(인증) 가능
        </text>
        <Image
          className="h-[8rem] w-[40rem] my-[4rem]"
          src="/images/childcare2.gif"
          width={1000}
          height={1000}
          alt="이미지"
        />
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          발급사도 확대되어 부모가 다양한 카드사 중 선호하는 카드사를 선택하여
          아이행복카드 발급 가능
        </text>
        <section>
          <table className="text-md lg:text-lg text-left text-gray-500 mt-[1.5rem]">
            <thead className="text-md lg:text-lg text-gray-700  bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-5 border-b-2 border-r-2 border-slate-500 text-center"
                  colSpan={2}
                >
                  2014
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 border-b-2 border-slate-500 text-center"
                >
                  2015
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-gray-100 border-r-2 border-b-2 border-slate-500">
                  아이사랑카드(보건복지부)
                </td>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-gray-100 border-r-2 border-b-2 border-slate-500">
                  아이즐거운 카드(교육부)
                </td>
                <td className="text-base lg:text-lg text-gray-700 px-10 py-5 bg-gray-100 border-b-2 border-slate-500">
                  아이행복카드(보건복지부,교육부 공동)
                </td>
              </tr>
              <tr>
                <td className="text-base lg:text-md text-black px-10 py-5 bg-white ">
                  KB국민카드 우리카드 하나카드
                </td>
                <td className="text-sm lg:text-base text-black px-10 py-5 bg-white">
                  NH농협카드 부산은행
                </td>
                <td className="text-sm lg:text-base text-black px-10 py-5 bg-white">
                  KB국민카드, 우리카드, 하나카드, 신한카드, <br />
                  NH농협카드, 롯데카드, BC카드 (IBK기업은행, <br />
                  스탠다드차타드은행, 대구은행, 부산은행, 경남은행, 전북은행
                  <br /> 수협은행, 광주은행, 우체국, 제주은행, 신협, 현대증권)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          아이행복카드 신청 대상자
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 ">
          어린이집(유치원)에 다니면서 정부로부터 보육료(유아학비)를 지원받고
          있는 모든 아동의 부모
          <br />
          소득수준에 상관없이 전 계층에 보육료(유아학비) 지원
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          아이행복카드 신청 방법
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 ">
          -정부지원 보육료 지원 대상자
          <br />
          아동의 주민등록 주소지의 읍면동 주민센터 및 온라인
          복지로(www.bokjiro.go.kr) 에서 보육료 지원 및 아이행복카드 발급 신청
          <br />
          -보육료 미지원 대상자
          <br />
          온라인 임신육아종합포털 아이사랑(www.childcare.go.kr) 또는 국민은행,
          우리은행, 하나은행, 신한은행, NH농협 등 영업점 방문, 금융기관
          홈페이지를 통해 신청
        </text>
        <section className="mt-[4rem]">
          <text className="text-xl lg:text-2xl font-semibold">
            보육료 및 아이행복카드 신청 구비서류
          </text>
          <table className="text-base lg:text-lg text-left text-gray-500 mt-[1.5rem] ">
            <thead className="text-base lg:text-lg text-gray-700 bg-gray-100 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  구분
                </th>
                <th scope="col" className="px-6 py-3">
                  구비서류
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 bg-gray-100">공통 서류</td>
                <td className="px-6 py-4">
                  사회복지서비스 및 급여 제공(변경) 신청서* <br />
                  사회복지서비스 이용권(바우처) 제공(변경) 신청서*
                  바우처카드발급 신청 및<br />
                  개인신용정보의 조회, 제공, 이용 동의서*
                  <br /> 신청인 본인을 확인할 수 있는 신분증서(주민등록증,
                  자동차운전면허증 등) <br />
                  카드연결계좌 통장 또는 통장사본 확인(사본제출 불필요)
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 bg-gray-100">추가 서류</td>
                <td className="px-6 py-4">
                  장애진단서(5세 이하 장애인 복지카드 미소지자) 및 특수교육
                  대상자 선정,
                  <br /> 결정 통지서(만3~8세의 발달지체만 해당)
                  <br />
                  혼인관계증명서(다문화보육료 지원자 중 행복e음을 통해 다문화
                  가족임이 확인 되지 않은 경우)
                  <br />
                  난민인정증명서
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mt-[4rem]">
          <text className="text-2xl font-semibold">
            아이행복카드 업무처리절차
          </text>
          <table className="text-base lg:text-lg text-left text-gray-500 mt-[1.5rem] ">
            <thead className="text-base lg:text-lg text-gray-700  bg-gray-100 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  구분
                </th>
                <th scope="col" className="px-6 py-3">
                  업무
                </th>
                <th scope="col" className="px-6 py-3">
                  주요내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 bg-gray-100">부모</td>
                <td className="px-6 py-4">보육료 및 아이행복카드 신청</td>
                <td className="px-6 py-4">
                  사회복지서비스 및 급여제공(변경)신청서 제출,
                  <br /> 아이행복카드 발급 신청
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 bg-gray-100" rowSpan={2}>
                  시군구
                </td>
                <td className="px-6 py-4">자격 판정</td>
                <td className="px-6 py-4">자격 결정통보</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">
                  지급 자격 판정
                  <br />
                  아이행복카드 발급 대상자 정보 금융기관으로 전송
                </td>
                <td className="px-6 py-4">보육료의 자격결정 통보</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 bg-gray-100">카드사</td>
                <td className="px-6 py-4">아이행복 카드 발급</td>
                <td className="px-6 py-4">
                  금융기관 자체심사기준에 따라 카드 발급 후<br /> 신청인 주소로
                  아이행복카드 배송
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 bg-gray-100">부모</td>
                <td className="px-6 py-4">결제</td>
                <td className="px-6 py-4">
                  어린이집에서 보육서비스 이용 후 <br />
                  아이행복카드로 결제
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          아이행복카드(보육료) 결제
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          -부모는 어린이집에 설치된 단말기에 아이행복카드로 보육료 결제
        </text>
        <Image
          className="h-[8rem] w-[40rem] my-[4rem]"
          src="/images/childcare1.gif"
          width={1000}
          height={1000}
          alt="이미지"
        />
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          -결제방법
          <br />
          방문결제 : 매월 어린이집에 방문하여 아이행복카드로 보육료 결제
          <br />
          인터넷결제 : 임신육아종합포털 아이사랑(www.childcare.go.kr)에서 결제
          <br />
          ARS결제 : ARS(☎1566-0244)로 보육료 결제
          <br />
          모바일결제 : 앱스토어, 안드로이드 마켓, 임신육아종합포털 아이사랑
          링크를 통해 [임신육아종합포털 아이사랑] 앱을 다운로드 받아 결제
          <br />
          -결제금액
          <br />
          정부지원금과 부모부담금의 총액 결제 (평균 5일 이내 어린이집에 보육료
          지급)
          <br />
          -결제내역
          <br />
          카드결제일에 맞추어 부모에게 카드청구서로 부모부담금 청구
          <br />
        </text>
        <text className="text-xl lg:text-2xl font-semibold pt-[5rem]">
          기타사항
        </text>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3 ">
          신용카드 연회비 부모부담 없음
        </text>
        <Link
          className="text-xl lg:text-2xl font-semibold mt-[5rem] underline"
          href="https://www.childcare.go.kr/"
          target="_blank"
        >
          임신육아종합포털 아이사랑 바로가기
        </Link>
        <text className="text-lg lg:text-xl font-normal leading-8 pt-3">
          신용카드 연회비 부모부담 없음
        </text>
      </div>
    </main>
  );
}
