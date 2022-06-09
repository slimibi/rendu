import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Flex,
  Image,
  Text,
  useToast,
  Spinner,
  Link
} from '@chakra-ui/react';
import Layout from './layout/Layout';
import logo from './loutrelogo.png';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const toast = useToast();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const login = async () => {
    axios
      .post(
        'http://localhost:4000/login',
        {
          username,
          password
        },
        {
          withCredentials: true
        }
      )
      .then(
        async (res: AxiosResponse) => {
          if (res.data === 'success') {
            toast({
              title: 'Connexion',
              description: 'Vous allez être redirigé sur la page de cour.',
              status: 'success',
              isClosable: true
            });
            <Spinner />;
            await timeout(3000);
            window.location.href = '/choose';
          }
        },
        () => {
          toast({
            title: "Une erreur s'est produite..",
            description: "Mot de passe ou nom d'utilisateur erroné.",
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      );
  };

  return (
    <Layout>
      <Box w="100%" py={[4, 20]} textAlign="center">
        <Box>
          <Flex>
            <Box
              w={['0', '0', '0', '40%']}
              p={[0, 0, 0, 20]}
              ml={[0, 0, 0, 40]}
            >
              <Image
                src={logo}
                boxSize={['0', '0', '0', '180px']}
                objectFit="cover"
                alt="Segun Adebayo"
              />
            </Box>
            <Box
              mr={['0', '0', '0', '10rem']}
              mt={6}
              w={['100%', '100%', '100%', '60%']}
            >
              <Text textStyle="h6" color="simplyOrange" fontSize="30px">
                Connexion
              </Text>
              <Box mt={10} ml={2}>
                <FormControl isRequired color="simplyAlgo">
                  <FormLabel textAlign="center" fontWeight={700}>
                    Nom d'utilisateur
                  </FormLabel>
                  <Input
                    textAlign="center"
                    type="text"
                    placeholder="nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FormLabel textAlign="center" mt={5} fontWeight={700}>
                    Mot de passe
                  </FormLabel>
                  <Input
                    type="password"
                    textAlign="center"
                    placeholder="mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={login} variant="orange" mt={5}>
                    Connexion
                  </Button>
                </FormControl>
                <br />
                <Link
                  href="/register"
                  alignSelf="center"
                  ml={2}
                  color="simplyAlgo"
                  textStyle="h6"
                >
                  Si vous n'êtes pas inscrit clique ici
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
}
