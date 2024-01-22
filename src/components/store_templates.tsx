import Utiles from "@/utiles";
import { Button, Center, Image, Link, Text } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

interface StoreTemplatesProps {
  url: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonTexte: string;
}
const StoreTemplates = (props: StoreTemplatesProps) => {
  const utile = new Utiles();
  return (
    <Center
      w={{
        base: "95%",
        md: "45%",
      }}
      h={{ base: "55vh", sm: "50vh", md: "45vh" }}
      borderRadius={"15px"}
      className="store-template"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      mb={"5vh"}
      p={"5%"}
    >
      <Image src={props.image} alt={props.alt} boxSize={"2.5em"} mb={"0.5em"} />
      <Fade direction="up" triggerOnce={true}>
        <Text fontWeight={"bold"} fontSize={"2em"}>
          {props.title}
        </Text>
        <Text mt={"1em"}>{props.description}</Text>
      </Fade>
      <Link href={props.url} target="_blank" download={true}>
        <Button
          mt={"1em"}
          bg={"#F68080"}
          color={"white"}
          position={"relative"}
          transition={"0.5s"}
          zIndex={1}
          overflow={"hidden"}
          className="download-button"
          _hover={{ bg: "#F68080" }}
        >
          {props.buttonTexte}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </Link>
    </Center>
  );
};

export default StoreTemplates;
