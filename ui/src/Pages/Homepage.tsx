import React, { useContext } from 'react';
import {
  Text,
  Box,
  Button,
  Flex,
  Image,
  Grid,
  GridItem,
  Link,
  Center,
  Stack,
  useColorModeValue,
  ListItem,
  List,
  ListIcon
} from '@chakra-ui/react';
import { CheckIcon } from '../theme/components/icons/CheckIcon';

import logo from './loutrelogo.png';
import Layout from './layout/Layout';
import { myContext } from './Context';

export default function Homepage() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box>
        <Box py={[4, 40]} mx={40}>
          <Grid
            h={['400px', '200px', '200px', '200px', '200px']}
            templateRows="repeat(2, 1fr)"
            templateColumns={['0', '0', '0', '0', 'repeat(5, 1fr)']}
            gap={8}
            ml={['-4rem', '0', '5rem', '10rem']}
            mt={['3rem', '0', '0', '0']}
          >
            <GridItem rowSpan={6} colSpan={2} textAlign="center">
              <Box>
                <Text
                  textStyle="h2"
                  color="simplyAlgo"
                  textAlign={['center', 'center', 'center', 'unset']}
                >
                  Apprends un langage <br />
                  informatique gratuitement <br />
                  tout en t'amusant.
                </Text>
                <Button my={10} variant="orange">
                  <Link
                    textStyle="h6"
                    href={ctx ? '/choose' : '/login'}
                    className="whited"
                  >
                    {' '}
                    C'est parti
                  </Link>
                </Button>
              </Box>
            </GridItem>
            <GridItem colSpan={3} ml="5rem">
              <Box>
                <Flex
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row'
                  ]}
                >
                  <Image
                    src={logo}
                    boxSize={['0', '0', '0', '0', '140px']}
                    objectFit="cover"
                    alt="Segun Adebayo"
                  />
                  <Box
                    ml={4}
                    border={['0', '0', '0', '0', '3px solid orange']}
                    borderRadius="10px"
                    p={3}
                    w={['0', '0', '0', '200px']}
                    h={20}
                    textAlign="center"
                  >
                    <Text
                      fontSize={['0', '0', '0', '0', '16px']}
                      fontWeight="700"
                      color="simplyAlgo"
                    >
                      Hello je m'appelle Loudev
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box Box w="100%" py={[4, 20]} bg="#F5F5F5">
          <Box
            ml={['0', '0', '5rem', '3rem', '10rem']}
            textAlign={['center', 'center', 'center', 'unset']}
          >
            <Text textStyle="h2" color="simplyAlgo">
              La meilleure façon d'apprendre un langage
            </Text>
            <br />
            <Text textStyle="rf-text" letterSpacing={2} lineHeight={2}>
              Apprendre avec SimplyAlgo, c'est amusant et captivant. <br />
              Nos leçons sont à la fois courtes et efficaces, et on a la preuve
              que ça marche.
            </Text>
          </Box>
        </Box>
        <Box w="100%" py={[4, 20]} bg="white">
          <Center py={6} flexDirection={['column', 'column', 'row', 'row']}>
            <Box
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              transition="0.5s"
              _hover={{
                boxShadow: '-1px 5px 28px 5px rgba(0,0,0,0.49)',
                transition: '0.5s'
              }}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={useColorModeValue('yellow.50', 'yellow.900')}
                  p={2}
                  px={3}
                  color={'yellow.500'}
                  rounded={'full'}
                >
                  Premium
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    20
                  </Text>
                  <Text fontSize={'3xl'}>€</Text>
                  <Text color={'gray.500'}>/mois</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Exercices Illimités
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Pas de plublicité
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Lorem ipsum dolor sit amet.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    All features
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={'full'}
                  bg={'yellow.300'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'yellow.400'
                  }}
                  _focus={{
                    bg: 'yellow.400'
                  }}
                >
                  Start your trial
                </Button>
              </Box>
            </Box>
            <Box
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              transition="0.5s"
              _hover={{
                boxShadow: '-1px 5px 28px 5px rgba(0,0,0,0.49)',
                transition: '0.5s'
              }}
              overflow={'hidden'}
              ml={[0, 0, 10, 10]}
              mt={[10, 10, 0, 0]}
            >
              <Stack
                textAlign={'center'}
                p={6}
                color={useColorModeValue('gray.800', 'white')}
                align={'center'}
              >
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={useColorModeValue('orange.50', 'orange.900')}
                  p={2}
                  px={3}
                  color={'yellow.500'}
                  rounded={'full'}
                >
                  Premium+
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    50
                  </Text>
                  <Text fontSize={'3xl'}>€</Text>
                  <Text color={'gray.500'}>/mois</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Exercices Illimités
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Pas de plublicité
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Lorem ipsum dolor sit amet.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    All features
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={'full'}
                  bg={'orange.300'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'orange.400'
                  }}
                  _focus={{
                    bg: 'orange.400'
                  }}
                >
                  Start your trial
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </Layout>
  );
}
