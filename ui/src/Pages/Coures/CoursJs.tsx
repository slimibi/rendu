import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import {
  Box,
  Flex,
  Text,
  Image,
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalFooter,
  ListItem,
  UnorderedList,
  ModalBody,
  useToast
} from '@chakra-ui/react';
import AccordionComponents from './AccordionComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  DoubleQuotes,
  Star,
  Validate,
  Error
} from '../../theme/components/icons';
import FeedBack from './FeedBack';
import axios, { AxiosResponse } from 'axios';
import { FeedBackInterface } from '../../Interfaces/FeedInterface';
import { myContext } from '../Context';
import { Carousel } from 'react-bootstrap';
import logo from '../loutrelogo.png';

export default function CoursJs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [feed, setFeed] = useState([]);
  const ctx = useContext(myContext);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const validateQuiz = async () => {
    setValidate(true);
    setError(true);
    toast({
      title: 'Valider',
      description: 'Vous avez bien repondu bien jouer',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    await timeout(3000);
    progression();
  };
  const ErrorQuiz = async () => {
    setValidate(true);
    setError(true);
    toast({
      title: 'Echec',
      description: "Ce n'est pas la bonne reponse Veuillez ressayer",
      status: 'error',
      duration: 3000,
      isClosable: true
    });
    await timeout(3000);
    window.location.reload();
  };

  const handleStarClick = (e: any, index: any) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/feed', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFeed(
          res.data.filter((item: FeedBackInterface) => {
            return item.firstname;
          })
        );
      });
  }, [ctx]);
  if (!feed) {
    return null;
  }

  const newLevel = {
    level: 20
  };

  const progression = () => {
    if (newLevel.level === 20) {
      window.location.reload();
      axios
        .put(`http://localhost:4000/user/${ctx.id}`, newLevel)
        .then(async (res: AxiosResponse) => {
          if (res.data === 'success') {
          }
        });
    } else {
      console.log('');
    }
  };
  return (
    <Layout>
      <Flex p={4} bg="#FBFBFB" justifyContent="center">
        <Image
          src="https://blog.oxiane.com/wp-content/uploads/2018/01/js.png"
          w="150px"
          h="150px"
        />
      </Flex>
      <Flex mx={10} h="100%" flexDirection={['column', 'row', 'row', 'row']}>
        <Box w={['100%', '20%', '20%', '20%']} p={[0, 0, 0, 5]}>
          <AccordionComponents />
        </Box>
        <Box
          p={5}
          w={['100%', '100%', '62%', '62%']}
          textAlign={['center', 'justify', 'justify', 'justify']}
        >
          <Text textStyle="h4" textAlign="center" id="Prérequis">
            Une première définition du JavaScript
          </Text>
          <Text mt={10}>
            Le JavaScript est un langage de programmation créé en 1995. Le
            JavaScript est aujourd’hui l’un des langages de programmation les
            plus populaires et il fait partie des langages web dits « standards
            » avec le HTML et le CSS. Son évolution est gérée par le groupe ECMA
            International qui se charge de publier les standards de ce langage.
          </Text>
          <Text mt={10}>
            Le JavaScript est un langage de programmation créé en 1995. Le
            JavaScript est aujourd’hui l’un des langages de programmation les
            plus populaires et il fait partie des langages web dits « standards
            » avec le HTML et le CSS. Son évolution est gérée par le groupe ECMA
            International qui se charge de publier les standards de ce langage.{' '}
            <br /> <br />
            On dit que le HTML, le CSS et le JavaScript sont des standards du
            web car les principaux navigateurs web (Google Chrome, Safari,
            Firefox, etc.) savent tous « lire » (ou « comprendre » ou «
            interpréter ») ces langages et les interprètent généralement de la
            même façon ce qui signifie qu’un même code va généralement produire
            le même résultat dans chaque navigateur. <br /> <br />
            Pour définir ce qu’est le JavaScript et le situer par rapport aux
            autres langages, et donc pour comprendre les intérêts et usages du
            JavaScript il faut savoir que :
          </Text>
          <Alert status="success" mt={10} p={5}>
            <AlertIcon />
            <UnorderedList ml={5}>
              <ListItem> Le JavaScript est un langage dynamique</ListItem>
              <ListItem>
                Le JavaScript est un langage (principalement) côté client
              </ListItem>
              <ListItem>Le JavaScript est un langage interprété</ListItem>
              <ListItem>Le JavaScript est un langage orienté objet</ListItem>
            </UnorderedList>
          </Alert>
          <Text mt={10}>
            Le JavaScript est un langage dynamique, c’est-à-dire un langage qui
            va nous permettre de générer du contenu dynamique pour nos pages
            web. Un contenu « dynamique » est un contenu qui va se mettre à jour
            dynamiquement, c’est-à-dire changer sans qu’on ait besoin de
            modifier le code manuellement mais plutôt en fonction de différents
            facteurs externes. <br /> <br />
            On oppose généralement les langages « dynamiques » aux langages «
            statiques » comme le HTML et le CSS. Illustrons les différences
            d’utilisation entre ces types de langage en discutant des
            possibilités du HTML, du CSS et du JavaScript.
          </Text>
          <Text mt={10}>
            Pour rappel, le HTML est un langage de balisage (langage qui utilise
            des balises) qui est utilisé pour structurer et donner du sens aux
            différents contenus d’une page. Le HTML nous permet de communiquer
            avec un navigateur en lui indiquant que tel contenu est un titre,
            tel contenu est un simple paragraphe, tel autre est une liste, une
            image, etc. <br /> <br />
            Le navigateur comprend les différentes balises HTML et va alors
            afficher notre page à nos visiteurs en tenant compte de celles-ci.
            Le contenu HTML ne va jamais être affiché tel quel, brut, mais des
            règles de mises en forme vont lui être appliquées. <br /> <br /> Ces
            règles de styles vont être définies en CSS. Le CSS va ainsi nous
            permettre d’arranger les différents contenus HTML de la page en les
            positionnant les uns par rapport aux autres, en modifiant la couleur
            des textes, la couleur de fond des éléments HTML, etc.
          </Text>
          <Alert status="error" mt={10} p={5} fontWeight="700" id="jsJava">
            <AlertIcon />
            JavaScript vs Java : attention aux confusions !
          </Alert>
          <Text mt={10}>
            Encore aujourd’hui, certaines personnes ont tendance à confondre les
            deux langages « Java » et « JavaScript ». Retenez ici que ces deux
            langages, bien que syntaxiquement assez proches à la base, reposent
            sur des concepts fondamentaux complètement différents et servent à
            effectuer des tâches totalement différentes. <br /> <br />
            Pourquoi des noms aussi proches ? Java est une technologie créée
            originellement par Sun Microsystems tandis que JavaScript est un
            langage créé par la société Netscape. Avant sa sortie officielle, le
            nom original du JavaScript était « LiveScript ». Quelques jours
            avant la sortie du LiveScript, le langage est renommé JavaScript.
          </Text>
          <Text mt={10}>
            A l’époque, Sun et Netscape étaient partenaires et le Java était de
            plus en plus populaire. Il est donc communément admis que le nom «
            JavaScript » a été choisi pour des raisons marketing et pour créer
            une association dans la tête des gens avec le Java afin que les deux
            langages se servent mutuellement. Le créateur du JavaScript a
            également expliqué que l’idée de base derrière le développement du
            JavaScript était d’en faire un langage complémentaire au Java.
          </Text>
          <Button
            onClick={onOpen}
            variant="orange"
            mt={10}
            id="Exercice"
            display="block"
            mx="auto"
            w={['100%', '70%', '30%', '30%']}
            fontWeight="700"
          >
            Exercice
          </Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody p={10}>
                <Box>
                  <Image
                    src={logo}
                    display="block"
                    mx="auto"
                    w="110px"
                    h="100px"
                  />
                </Box>
                <Box bg="#F9F9F9" borderRadius="0px 0px 20px 20px">
                  <Box
                    textAlign="center"
                    bg="orange"
                    borderRadius="20px 20px 0px 0px"
                  >
                    <Text textStyle="h6" color="white" p={4}>
                      Quelle est la methonde pour affiche un message dans la
                      console Web ?
                    </Text>
                  </Box>
                  <Flex mt={4}>
                    <Button
                      bg="white"
                      display="block"
                      mx="auto"
                      w="10rem"
                      border="2px solid orange"
                      borderRadius="13px"
                      fontWeight="700"
                      transition="0.5s"
                      mt={1}
                      onClick={validateQuiz}
                    >
                      console.log
                    </Button>
                    <Validate
                      position="absolute"
                      ml="15rem"
                      color="orange"
                      transition="0.5s"
                      w={validate === true ? '25px' : '0px'}
                    />
                  </Flex>
                  <Flex mt={4}>
                    <Button
                      bg="white"
                      display="block"
                      mx="auto"
                      w="10rem"
                      border="2px solid orange"
                      borderRadius="13px"
                      fontWeight="700"
                      mt={1}
                      transition="0.5s"
                      onClick={ErrorQuiz}
                    >
                      consol.log
                    </Button>
                    <Error
                      position="absolute"
                      ml="15rem"
                      color="orange"
                      transition="0.5s"
                      w={error === true ? '25px' : '0px'}
                    />
                  </Flex>
                  <Flex mt={4}>
                    <Button
                      bg="white"
                      display="block"
                      mx="auto"
                      w="10rem"
                      border="2px solid orange"
                      borderRadius="13px"
                      onClick={ErrorQuiz}
                      fontWeight="700"
                      transition="0.5s"
                      mt={1}
                    >
                      console.logs
                    </Button>
                    <Error
                      position="absolute"
                      ml="15rem"
                      color="orange"
                      transition="0.5s"
                      w={error === true ? '25px' : '0px'}
                    />
                  </Flex>
                  <Flex mt={4}>
                    <Button
                      bg="white"
                      display="block"
                      mx="auto"
                      w="10rem"
                      border="2px solid orange"
                      onClick={ErrorQuiz}
                      transition="0.5s"
                      borderRadius="13px"
                      fontWeight="700"
                      mt={1}
                    >
                      consoles.logs
                    </Button>
                    <Error
                      position="absolute"
                      ml="15rem"
                      transition="0.5s"
                      color="orange"
                      w={error === true ? '25px' : '0px'}
                    />
                  </Flex>
                  <br />
                </Box>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <Carousel>
            {feed.map((item: FeedBackInterface) => {
              return (
                <Carousel.Item>
                  <Box bg="#FBFBFB" p={5} my={10} key={item.id} id={item.id}>
                    <Flex p={5}>
                      <Image
                        src="https://www.debarra-speed-grandest.fr/wp-content/uploads/2020/04/avatar-default-icon.png"
                        w="150px"
                        h="150px"
                      />
                      <Text
                        alignSelf="center"
                        textAlign="justify"
                        ml={5}
                        fontSize="20px"
                      >
                        <Box mb={5}>
                          <DoubleQuotes w="20px" h="20px" />
                        </Box>
                        {item.msg}
                      </Text>
                    </Flex>
                    <Flex mt={1} ml={10}>
                      <Star
                        onClick={(e: any) => handleStarClick(e, 0)}
                        color={item.star1 ? 'simplyOrange' : null}
                      />
                      <Star color={item.star2 ? 'simplyOrange' : null} />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 2)}
                        color={item.star3 ? 'simplyOrange' : null}
                      />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 3)}
                        color={item.star4 ? 'simplyOrange' : null}
                      />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 4)}
                        color={item.star5 ? 'simplyOrange' : null}
                      />
                    </Flex>
                    <Box display="flex" justifyContent="center">
                      <Text color="info" textStyle="h6">
                        {item.firstname}
                      </Text>
                    </Box>
                  </Box>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
        <Box w={['100%', '20%', '20%', '20%']} p={5}>
          <Box position="sticky" top="0">
            <FeedBack />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
