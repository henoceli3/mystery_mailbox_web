import "@/styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Ajoutez les balises meta d'aperçu ici */}
        <meta property="og:title" content="Mystery Mailbox" />
        <meta
          property="og:description"
          content="Envoyer des messages anonymes"
        />
        <meta property="og:image" content="URL_de_votre_image_d'aperçu" />
        <meta property="og:url" content="/logo_bg_gradient.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
