import AppBar from "@/components/app_bar";
import StoreTemplates from "@/components/store_templates";
import Utiles from "@/utiles";
import { Center, Flex, Text } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const GetMobileApp = () => {
  const utile = new Utiles();
  return (
    <>
      <Flex minH={"100vh"} w={"100vw"} flexDirection={"column"}>
        <AppBar />
        <Center
          mt={"5vh"}
          w={"100%"}
          h={{
            base: "50vh",
            sm: "50vh",
            md: "45vh",
          }}
        >
          <Flex
            w={{ base: "90%", md: "70%" }}
            h={"80%"}
            bg={utile.getPrimaryColor()}
            borderRadius={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            p={"5%"}
          >
            <Fade direction="up" triggerOnce={true}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"2em"}>
                Télécharger
              </Text>
              <Text color={"white"} fontWeight={"bold"} fontSize={"2em"}>
                Mystery Mailbox
              </Text>
              <Text color={"white"}>
                Mystery Mailbox est disponible sur mobile
              </Text>
            </Fade>
          </Flex>
        </Center>
        <Flex
          w={"100%"}
          h={"auto"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={"5vh"}
          p={"5%"}
          flexWrap={"wrap"}
        >
          {utile.getStoreTemplates().map((store) => (
            <StoreTemplates key={store.id} {...store} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default GetMobileApp;
