import "@/styles/globals.css";
import { Geist } from "next/font/google";
import type { AppProps } from "next/app";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geist.variable}>
      <Component {...pageProps} />
    </div>
  );
}
