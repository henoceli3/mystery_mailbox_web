import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import MessageBox from "../../components/message_box";
import MessageSent from "../../components/message_sent";
import Head from "next/head";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Utiles from "@/utiles";
dotenv.config();

const SendMessage = () => {
  const router = useRouter();
  const utiles = new Utiles();
  const [userName, setUserName] = useState(
    useRouter().query.username as string
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [needAnswer, setNeedAnswer] = useState(false);
  const [sendedBy, setSendedBy] = useState("");
  const [isSenderValid, setIsSenderValid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    setUserName(router.query.username as string);
  }, [router.query.username]);

  const data = {
    userName: userName,
    message: message,
    sendedBy: sendedBy,
    needAnswer: needAnswer,
    answer: false,
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  };

  const handleSwitchChange = () => {
    if (needAnswer == true) {
      setSendedBy("");
      setIsSenderValid(false);
    }
    setNeedAnswer(!needAnswer);
    if (!needAnswer) {
      onOpen();
    }
  };

  const handleUserNameImputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    setSendedBy(inputValue);
  };

  const apiHost = "https://busy-jade-crab-wig.cyclic.app";

  const _sendMessage = async () => {
    try {
      console.log(`needAnswer: ${needAnswer}`);
      setIsLoading(true);
      const url = `${apiHost}/v1/messages/create_and_send`;
      await axios.post(url, data);
      setMessage("");
      setNeedAnswer(false);
      setIsLoading(false);
      setIsSent(true);
    } catch (error) {
      setMessage("");
      setIsLoading(false);
      setIsSent(false);
      console.log(error);
    }
  };

  const checkUsername = async () => {
    try {
      if (userName !== sendedBy) {
        const url = `${apiHost}/users/checkUserName`;
        const response = await axios.post(url, { userName: sendedBy });
        if (response.data.data.existUser === true) {
          setIsSenderValid(true);
        } else {
          setNeedAnswer(false);
          setSendedBy("");
          setIsSenderValid(false);
          toast({
            title: `Ce nom d'utilisateur n'existe pas`,
            status: "error",
            isClosable: true,
          });
        }
        onClose();
      } else {
        toast({
          title: `Vous ne pouvez pas envoyer un message a vous-meme`,
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
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
          content="https://5hkpl8gc-3000.uks1.devtunnels.ms/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* container principal */}
      <Flex
        h="100vh"
        w="100%"
        flexDirection={"column"}
        alignItems={"center"}
        className="bg-gradient"
      >
        {/* partie du haut  */}
        {isSent ? (
          <MessageSent setIsSent={setIsSent} />
        ) : (
          <MessageBox
            userName={userName}
            message={message}
            isLoading={isLoading}
            needAnswer={needAnswer}
            _sendMessage={_sendMessage}
            handleInputChange={handleInputChange}
            handleSwitchChange={handleSwitchChange}
          />
        )}
        {needAnswer ? <></> : null}
        {/* partie du bas  */}
        <Flex
          w={{ base: "95%", sm: "80%", md: "70%", lg: "40%", xl: "40%" }}
          h={"50%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={" center"}
          //   bg={"white"}
        >
          {/* modal pour saisir son userName  */}
          {message ? (
            <>
              <Modal
                isOpen={isOpen}
                onClose={() => {
                  onClose();
                  setNeedAnswer(false);
                  setIsSenderValid(false);
                }}
                isCentered
                closeOnOverlayClick={false}
              >
                <ModalOverlay />
                <ModalContent bgGradient={utiles.getBgGradient()}>
                  <ModalHeader>
                    Saisissez votre userName Mystery Mailbox
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <InputGroup>
                      <Input
                        placeholder="userName"
                        onChange={handleUserNameImputChange}
                        bg={"rgba(255,255,255,0.4)"}
                        color={"black"}
                        border={"none"}
                        outline={"none"}
                        _focus={{
                          border: "none",
                          outline: "none",
                        }}
                      />
                      {
                        <InputRightElement>
                          {isSenderValid ? (
                            <CheckIcon color="green.500" />
                          ) : (
                            <CloseIcon color="red.500"></CloseIcon>
                          )}
                        </InputRightElement>
                      }
                    </InputGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      bg={"rgba(255,255,255,0.4)"}
                      mr={3}
                      onClick={() => {
                        onClose();
                        setNeedAnswer(false);
                        setIsSenderValid(false);
                      }}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="ghost"
                      bg={"black"}
                      color={"white"}
                      onClick={checkUsername}
                    >
                      Valider
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          ) : (
            <Button
              w={"100%"}
              h={"15%"}
              bg={"black"}
              color={"white"}
              fontWeight={"bold"}
              borderRadius={"30px"}
              className="pulse button"
              onClick={() => {
                router.push("/mobileapp");
              }}
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
