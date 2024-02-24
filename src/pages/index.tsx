import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <Navbar />
      </div>
      <section className="flex-grow flex items-center">
        <ComingSoon showKembali={false} />
      </section>
    </>
  );
}
