import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex-grow flex flex-col items-center justify-center w-full max-w-full overflow-x-clip">
        <section className="min-h-screen h-0 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
          <div className="h-80 md:h-1/2 w-auto py-2">
            <Image
              src="/steik23.svg"
              className="cursor-pointer object-contain mix-blend-multiply h-4 min-h-full w-auto py-2"
              height={30}
              width={30}
              alt="Logo STEI-K 23"
              blurDataURL="https://steik23.netlify.app/steik23.svg"
            />
          </div>
          <div className="w-fit space-y-4">
            <h1 className="font-bold text-3xl md:text-5xl">Syntax | STEI-K 23</h1>
            <h2 className="text-2xl">Code, Create, Connect!</h2>
            <p>Website masih dalam pembuatan, mohon bersabar</p>
            <p>Contact:</p>
            <ul>
              <li>@yonatan_nyo (instagram)</li>
              <li>@yonatanedwardn (line)</li>
            </ul>
          </div>
        </section>
        <section className="h-0 min-h-screen w-full flex items-center justify-center">
          <ComingSoon showKembali={false} />
        </section>
      </section>
    </>
  );
}
