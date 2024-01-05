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
      <Center h="100vh" w="100vw">
        <Heading>Home</Heading>
      </Center>
    </>
  );
}
