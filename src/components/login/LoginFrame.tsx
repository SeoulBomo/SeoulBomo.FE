import Image from "next/image";
import Link from "next/link";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "./Oauth";

export default function LoginFrame() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <section className="w-[40rem] h-screen bg-amber-200 hidden lg:flex flex-col items-center justify-center">
        <div className="font-extrabold text-3xl leading-loose">
          로그인하고
          <br />더 많은 서비스를 받아보세요!
        </div>
        <Image
          className="h-[16rem] w-[25.7rem] mt-[7rem]"
          src="/images/loginIcon.png"
          width={1000}
          height={1000}
          alt="로고"
        />
      </section>
      <section className="w-screen h-screen flex items-center justify-center">
        <Image
          className="absolute z-0 top-90 h-[18rem] w-[30rem] block lg:hidden"
          src="/images/loginIcon.png"
          width={1000}
          height={1000}
          alt="로고"
        />
        <div className="z-10 w-[20rem] h-[14rem] lg:w-[22rem] lg:h-[15rem] bg-white shadow-md rounded-[1rem] flex flex-col justify-evenly items-center">
          <div className="font-[600] text-md lg:text-lg py-[1rem]">
            소셜 로그인
          </div>
          <div className="flex flex-col gap-[1rem] justify-center items-center">
            <Link href={KAKAO_AUTH_URL}>
              <button className="w-[15rem] h-[3rem] bg-[#FEE500] flex items-center justify-center hover:shadow-md gap-[1rem] rounded-[1rem]">
                <Image
                  className="h-[2 rem] w-[2rem]"
                  src="/images/kakaoLogo.png"
                  width={1000}
                  height={1000}
                  alt="로고"
                />
                <div className="text-md lg:text-lg font-medium">
                  카카오 로그인
                </div>
              </button>
            </Link>
            <Link href={NAVER_AUTH_URL}>
              <button className="w-[15rem] h-[3rem] bg-[#02C759] flex items-center justify-center hover:shadow-md gap-[1rem] rounded-[1rem]">
                <Image
                  className="h-[2rem] w-[2rem]"
                  src="/images/naverLogo.png"
                  width={1000}
                  height={1000}
                  alt="로고"
                />
                <div className="text-md lg:text-lg font-medium">
                  네이버 로그인
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
