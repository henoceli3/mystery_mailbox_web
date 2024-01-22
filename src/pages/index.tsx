import AppBar from "@/components/app_bar";
import { Center, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Ajoutez les balises meta d'aperçu ici */}
        <title>Mystery Mailbox</title>
        <meta name="description" content="Envoyer des messages anonymes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mystery Mailbox" />
        <meta
          property="og:description"
          content="Envoyer des messages anonymes"
        />
        <meta property="og:image" content="/logo_bg_gradient.png" />
        <meta
          property="og:url"
          content="https://astonishing-cactus-f1ef9b.netlify.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex minH={"100vh"} w={"100vw"}>
        <AppBar />
      </Flex>
    </>
  );
}
