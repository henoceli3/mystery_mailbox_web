import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Utiles from "@/utiles";
import { Center, Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const utiles = new Utiles();
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
      <Center h="100vh" w="100vw">
        <Heading>Home</Heading>
      </Center>
    </>
  );
}
