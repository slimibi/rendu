import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Text,
  useToast,
  Link,
  Flex
} from '@chakra-ui/react';
import Layout from './layout/Layout';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [nom, setNom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [classe, setClasse] = useState<string>('');
  const toast = useToast();

  const register = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/register',
        {
          username,
          password,
          prenom,
          nom,
          email,
          classe
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Compte crée.',
            description: 'Nous avons créé votre compte pour vous.',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/login';
        } else {
          toast({
            title: "Une erreur s'est produite..",
            description: 'Impossible de créer votre compte.',
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      });
  };

  return (
    <Layout>
      <Box w="100%" py={[4, 20]} textAlign="center">
        <Text textStyle="h2" mb={10} color="simplyOrange">
          INSCRIPTION
        </Text>
        <Flex
          h={['600px', '200px', '200px', '200px']}
          flexDirection={['column', 'row', 'row', 'row', 'row']}
          justifyContent={['none', 'center', 'center', 'center', 'center']}
        >
          <Box textAlign="center" w={['100%', '30%', '30%', '30%', '30%']}>
            <FormControl isRequired color="simplyAlgo">
              <FormLabel
                fontWeight="700"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Nom
              </FormLabel>
              <Input
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                type="text"
                placeholder="nom"
                onChange={(e: any) => setNom(e.target.value)}
              />
              <FormLabel
                fontWeight="700"
                mt={5}
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Prenom
              </FormLabel>
              <Input
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                type="text"
                placeholder="prenom"
                onChange={(e: any) => setPrenom(e.target.value)}
              />

              <FormLabel
                mt={5}
                fontWeight="700"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Classe
              </FormLabel>
              <Input
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                type="text"
                placeholder="classe"
                onChange={(e: any) => setClasse(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box
            textAlign="center"
            ml={[0, 20, 20, 20]}
            w={['100%', '30%', '30%', '30%', '30%']}
          >
            <FormControl isRequired color="simplyAlgo">
              <FormLabel
                fontWeight="700"
                mt={[5, 0, 0, 0]}
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Email
              </FormLabel>
              <Input
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                type="email"
                placeholder="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <FormLabel
                mt={5}
                fontWeight="700"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Nom d'utilisateur
              </FormLabel>
              <Input
                type="text"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                placeholder="nom d'utilisateur"
                onChange={(e: any) => setUsername(e.target.value)}
              />
              <FormLabel
                mt={5}
                fontWeight="700"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              >
                Mot de passe
              </FormLabel>
              <Input
                type="password"
                textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
                placeholder="mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" mt={[0, 20, 20, 20]}>
        <Button onClick={register} fontSize="20px" variant="orange" p={6}>
          Inscription
        </Button>
      </Flex>
      <Link
        href="/login"
        alignSelf="center"
        ml={2}
        color="simplyAlgo"
        textStyle="h6"
      >
        <Text textAlign="center" mb={10}>
          Vous avez un compte clique ici
        </Text>
      </Link>
    </Layout>
  );
}
