import Image from "next/image";

export default function LoginFrame() {
  return (
    <main className=" w-screen h-screen flex justify-between">
      <section className=" w-2/6 h-screen bg-amber-200 flex flex-col items-center justify-center">
        <text className="font-extrabold text-3xl leading-loose">
          로그인하고
          <br />더 많은 서비스를 받아보세요!
        </text>
        <Image
          className="h-[16rem] w-[25.7rem] mt-[7rem]"
          src="/images/loginIcon.png"
          width={1000}
          height={1000}
          alt="로고"
        />
      </section>
      <section className="w-4/6 h-screen  flex items-center justify-center">
        <div className="w-[22rem] h-[25rem] border-gray-300 border-2  rounded-[0.95rem] flex flex-col items-center justify-center">
          <text className="text-lg">소셜 로그인</text>
          <button className="w-[16.5rem] h-[2.9rem] bg-[#FEE500] flex items-center justify-center mt-[3rem] mb-[1.5rem]">
            <Image
              className="h-[2rem] w-[2rem] mr-[1rem]"
              src="/images/kakaoLogo.png"
              width={1000}
              height={1000}
              alt="로고"
            />
            <text className="text-lg font-medium">카카오 로그인</text>
          </button>
          <button></button>
          <button className="w-[16.5rem] h-[2.9rem] bg-[#02C759] flex items-center justify-center">
            <Image
              className="h-[2rem] w-[2rem] mr-[1rem]"
              src="/images/naverLogo.png"
              width={1000}
              height={1000}
              alt="로고"
            />
            <text className="text-lg font-medium">네이버 로그인</text>
          </button>
          <button></button>
        </div>
      </section>
    </main>
  );
}
