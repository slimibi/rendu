import React, { useContext, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Progress,
  useDisclosure,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { myContext } from '../Context';
import { Trophy, Feather, Star } from '../../theme/components/icons';
import axios, { AxiosResponse } from 'axios';

export default function FeedBack() {
  const ctx = useContext(myContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [msg, setMsg] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [star1, setStar1] = useState<boolean>();
  const [star2, setStar2] = useState<boolean>();
  const [star3, setStar3] = useState<boolean>();
  const [star4, setStar4] = useState<boolean>();
  const [star5, setStar5] = useState<boolean>();

  const handleStarClick = (e: any, index: any) => {
    if (star1 === true) {
      setStar1(false);
      setStar2(false);
      setStar3(false);
      setStar4(false);
      setStar5(false);
    } else {
      setStar1(true);
    }
  };
  const handleStarClick2 = (e: any, index: any) => {
    if (star2 === true) {
      setStar1(false);
      setStar2(false);
      setStar3(false);
      setStar4(false);
      setStar5(false);
    } else {
      setStar1(true);
      setStar2(true);
    }
  };
  const handleStarClick3 = (e: any, index: any) => {
    if (star3 === true) {
      setStar1(false);
      setStar2(false);
      setStar3(false);
      setStar4(false);
      setStar5(false);
    } else {
      setStar1(true);
      setStar2(true);
      setStar3(true);
    }
  };
  const handleStarClick4 = (e: any, index: any) => {
    if (star4 === true) {
      setStar1(false);
      setStar2(false);
      setStar3(false);
      setStar4(false);
      setStar5(false);
    } else {
      setStar1(true);
      setStar2(true);
      setStar3(true);
      setStar4(true);
    }
  };
  const handleStarClick5 = (e: any, index: any) => {
    if (star5 === true) {
      setStar1(false);
      setStar2(false);
      setStar3(false);
      setStar4(false);
      setStar5(false);
    } else {
      setStar1(true);
      setStar2(true);
      setStar3(true);
      setStar4(true);
      setStar5(true);
    }
  };
  const toast = useToast();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const feed = () => {
    axios
      .post(
        'http://localhost:4000/feedback',
        {
          msg,
          firstname,
          star1,
          star2,
          star3,
          star4,
          star5
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Avis',
            description: 'Votre avis à bien été soumis.',
            status: 'success',
            duration: 3000,
            isClosable: true
          });
          await timeout(3000);
          window.location.reload();
        }
      });
  };
  return (
    <Box>
      <Flex justifyContent="center">
        <Trophy w={['30px']} h="30px" />
      </Flex>
      <Progress value={ctx.level} size="xs" colorScheme="orange" mt={10} />
      <Button
        variant="primary"
        bottom="5rem"
        position="fixed"
        right="1rem"
        onClick={onOpen}
      >
        <Feather w="20x" h="20px" />
        <Text ml={2}>Avis</Text>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FeedBack</DrawerHeader>
          <DrawerBody>
            <Textarea
              type="text"
              placeholder="FeedBack"
              onChange={(e: any) => setMsg(e.target.value)}
            />

            <Input
              mt={10}
              type="text"
              placeholder="Prénom"
              onChange={(e: any) => setFirstname(e.target.value)}
            />
            <Box mt={10} textAlign="center">
              <Star
                _hover={{ color: 'simplyOrange' }}
                onClick={(e: any) => handleStarClick(e, 0)}
                color={star1 ? 'simplyOrange' : null}
              />
              <Star
                _hover={{ color: 'simplyOrange' }}
                onClick={(e: any) => handleStarClick2(e, 1)}
                color={star2 ? 'simplyOrange' : null}
              />
              <Star
                _hover={{ color: 'simplyOrange' }}
                onClick={(e: any) => handleStarClick3(e, 2)}
                color={star3 ? 'simplyOrange' : null}
              />
              <Star
                _hover={{ color: 'simplyOrange' }}
                onClick={(e: any) => handleStarClick4(e, 3)}
                color={star4 ? 'simplyOrange' : null}
              />
              <Star
                _hover={{ color: 'simplyOrange' }}
                onClick={(e: any) => handleStarClick5(e, 4)}
                color={star5 ? 'simplyOrange' : null}
              />
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="blue" onClick={feed}>
              Envoyer
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
