import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { Pencil } from '../../../theme/components/icons';
import axios, { AxiosResponse } from 'axios';
import { ForumInterface } from '../../../Interfaces/ForumInterface';

export default function ForumJavaScript() {
  const [fofo, setFofo] = useState([]);
  const [fofoJs, setFofoJs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/forumMessage', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofo(res.data);
      });
    axios
      .get('http://localhost:4000/forumMessageJs', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFofoJs(res.data);
      });
  }, []);

  return (
    <Layout>
      <Box height="80ch">
        <Box p={7} textAlign="center" bg="#FBFBFB">
          <Text textStyle="h2" fontWeight="700">
            JAVASCRIPT
          </Text>
        </Box>
        <Flex
          border="2px solid #FD9800"
          w="15%"
          mx={20}
          borderRadius="4px"
          mt={10}
          p={2}
        >
          <Link
            href="/topic"
            mx={2}
            textStyle="h6"
            color="simplyOrange"
            flex="1"
          >
            Nouveau sujet
          </Link>
          <Pencil mt="5px" color="simplyAlgo" mr={3} />
        </Flex>
        {fofo.map((item: ForumInterface) => {
          return (
            <Box>
              {item.subject && (
                <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
                  <Link href="/functionjs">
                    <Flex textStyle="h6" key={item.id} id={item.id}>
                      <Text flex="1" color="simplyAlgo">
                        {item.subject}
                      </Text>
                      <Text color="simplyOrange">
                        {fofo.length} {fofo.length > 1 ? 'Messages' : 'Message'}
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              )}
            </Box>
          );
        })}
        {fofoJs.map((item: ForumInterface) => {
          return (
            <Box>
              {item.subject && (
                <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
                  <Link href="/functionjsx">
                    <Flex textStyle="h6" key={item.id} id={item.id}>
                      <Text flex="1" color="simplyAlgo">
                        {item.subject}
                      </Text>
                      <Text color="simplyOrange">
                        {fofoJs.length}{' '}
                        {fofoJs.length > 1 ? 'Messages' : 'Message'}
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
}
