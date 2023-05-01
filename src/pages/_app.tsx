import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/styles";
import { defaultTheme } from "@/styles/themes/default";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

