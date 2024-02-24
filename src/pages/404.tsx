import AstronoutRolling from "@/components/AstronoutRolling";
import Button from "@/components/Button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-full w-full text-center overflow-hidden">
      <div className="relative mt-40">
        <AstronoutRolling />
      </div>
      <div className="h-full flex items-center justify-center flex-col gap-4">
        <h1 className="animate-pulse text-2xl">404 - Page Not Found</h1>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
