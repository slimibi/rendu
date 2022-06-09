import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { ForumInterface } from '../../Interfaces/ForumInterface';

export default function PageMessageJs() {
  const [fofo, setFofo] = useState([]);

  const awnser = () => {
    window.location.href = '/awnserjsx';
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/forumMessageJs', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofo(res.data);
      });
  }, []);
  return (
    <Layout>
      <Box>
        {fofo.map((item: ForumInterface) => {
          return (
            <Box>
              <Box p={7} mx={20} mt={10} mb={10} key={item.id} id={item.id}>
                <Text textStyle="h4" color="simplyAlgo">
                  {item.subject}
                </Text>
              </Box>
              <Flex mx={20}>
                <Box w="15%">
                  <Image
                    display="block"
                    mx="auto"
                    src="https://www.debarra-speed-grandest.fr/wp-content/uploads/2020/04/avatar-default-icon.png"
                    w="150px"
                    h="150px"
                  />
                  <Text textStyle="h4" color="simplyAlgo" textAlign="center">
                    {item.username}
                  </Text>
                </Box>
                <Box bg="#F3F3F3" borderRadius="2rem" p={10} w="70%">
                  <Text color="simplyAlgo" textStyle="h6">
                    {item.msg}
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
        <Button
          variant="orange"
          mx="auto"
          display="block"
          my={10}
          onClick={awnser}
        >
          Répondre
        </Button>
      </Box>
    </Layout>
  );
}
