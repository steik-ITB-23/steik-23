import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const fontFam = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider baseUrl={process.env.BASE_URL} session={session}>
      <NextNProgress options={{ showSpinner: false }} />
      <div className="bg-slate-50">
        <main
          className={`flex min-h-screen h-fit flex-col items-center justify-between max-w-[1240px] mx-auto overflow-x-clip ${fontFam.className}`}>
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
}
