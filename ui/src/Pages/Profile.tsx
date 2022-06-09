import React, { useContext } from 'react';
import { myContext } from './Context';
import Layout from './layout/Layout';
import { Text, Box, Flex, Image } from '@chakra-ui/react';

export default function Profile() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box bg="#EEEEEE" height="50rem">
        <Box p={5} mx={['0', '0', '0', '20rem']} py="10rem">
          <Flex
            height="20rem"
            flexDirection={['column', 'column', 'column', 'column', 'row']}
          >
            <Box
              w={['100%', '100%', '100%', '100%', '25%']}
              bg="simplyOrange"
              boxShadow="-1px 17px 23px -1px rgba(0,0,0,0.34)"
            >
              <Image
                src="https://www.debarra-speed-grandest.fr/wp-content/uploads/2020/04/avatar-default-icon.png"
                w="100px"
                h="100px"
                display="block"
                mx="auto"
                mt={10}
              />
              <Text mt={5} textAlign="center" color="simplyAlgo" textStyle="h6">
                {ctx.prenom} {ctx.nom}
              </Text>
              <Text mt={5}></Text>
            </Box>
            <Box
              w={['100%', '100%', '100%', '100%', '60%']}
              bg="white"
              boxShadow="-1px 17px 23px -1px rgba(0,0,0,0.34)"
            >
              <Box mx={10} my={5}>
                <Text textStyle="h6">Information</Text>
                <hr />
                <Flex justifyContent="space-between" mb={5}>
                  <Text mt={5}>Nom : {ctx.nom}</Text>
                  <Text mt={5}>Prenom : {ctx.prenom}</Text>
                </Flex>
                <hr />
                <Flex justifyContent="space-between">
                  <Text mt={5}>Email : {ctx.email}</Text>
                  <Text mt={5}>Classe : {ctx.classe}</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
}
