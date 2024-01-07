import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import MessageBox from "./components/message_box";
import MessageSent from "./components/message_sent";
import Head from "next/head";
dotenv.config();

const SendMessage = () => {
  const [userName, setUserName] = useState(
    useRouter().query.username as string
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setUserName(router.query.username as string);
  }, [router.query.username]);

  const data = {
    userName: userName,
    message: message,
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
    console.log(message);
  };

  const _sendMessage = async () => {
    try {
      setIsLoading(true);
      const url = `https://lazy-rose-bat-veil.cyclic.app/messages/create`;
      console.log(data);
      const response = await axios.post(url, data);
      setMessage("");
      setIsLoading(false);
      setIsSent(true);
    } catch (error) {
      setMessage("");
      setIsLoading(false);
      setIsSent(false);
      console.log(error);
    }
  };

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
      {/* container principal */}
      <Flex h="100vh" w="100%" flexDirection={"column"} alignItems={"center"}>
        {/* partie du haut  */}
        {isSent ? (
          <MessageSent setIsSent={setIsSent} />
        ) : (
          <MessageBox
            userName={userName}
            message={message}
            isLoading={isLoading}
            _sendMessage={_sendMessage}
            handleInputChange={handleInputChange}
          />
        )}
        {/* partie du bas  */}
        <Flex
          w={{ base: "95%", sm: "80%", md: "70%", lg: "40%", xl: "40%" }}
          h={"50%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={" center"}
          //   bg={"white"}
        >
          {message ? (
            <></>
          ) : (
            <Button
              w={"100%"}
              h={"15%"}
              bg={"black"}
              color={"white"}
              fontWeight={"bold"}
              borderRadius={"30px"}
              className="pulse button"
            >
              Reçois tes propres messages
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default SendMessage;
