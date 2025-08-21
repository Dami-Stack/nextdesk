import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

// pick weights/styles you want
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // normal → bold
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
