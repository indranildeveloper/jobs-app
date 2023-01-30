import { useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/providers/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  // Bug fix for SSR
  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  return (
    <>
      {isSSR && (
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      )}
    </>
  );
}
