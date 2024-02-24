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
    <SessionProvider session={session}>
      <NextNProgress options={{ showSpinner: false }} />
      <main className={`flex h-0 min-h-screen flex-col items-center justify-between lg:p-24 bg-slate-50 ${fontFam.className}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
