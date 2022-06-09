import React, { useContext, useState } from 'react';
import Layout from '../layout/Layout';
import {
  Box,
  Text,
  Image,
  Link,
  Container,
  CircularProgress
} from '@chakra-ui/react';
import { myContext } from '../Context';
import axios, { AxiosResponse } from 'axios';

export default function Choose() {
  const ctx = useContext(myContext);
  const [getNbUser, setgetNbUser] = useState<number>();
  const newLevel = {
    level: 10
  };

  const progression = () => {
    if (newLevel.level === 10) {
      axios
        .put(`http://localhost:4000/user/${ctx.id}`, newLevel)
        .then(async (res: AxiosResponse) => {
          if (res.data === 'success') {
            window.location.reload();
          }
        });
    } else {
    }
  };

  const getUser = () => {
    axios
      .get(`http://localhost:4000/getallusers`)
      .then(async (res: AxiosResponse) => {
        setgetNbUser(res.data.length);
      });
  };
  getUser();
  return (
    <Layout>
      <Box>
        <Text textStyle="h2" textAlign="center" mt={10} color="simplyAlgo">
          Choisir son cours :
        </Text>
        <Container
          onClick={progression}
          w={['60%', '40%', '25%', '25%', '17%']}
          mt={20}
          border="1px solid #EEEEEE"
          p={12}
          borderRadius="4px"
          boxShadow="6px 6px 23px -15px"
          transition="1s"
          _hover={{ boxShadow: '6px 6px 23px -5px', transition: '1s' }}
        >
          <Link href="js">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              w="150px"
              h="150px"
            />
            <Box textAlign="center">
              <Text mt={5} textStyle="h4">
                JavaScript
              </Text>
              <Text mt={5} textStyle="h6" fontWeight="500">
                {getNbUser} apprenants
              </Text>
              <CircularProgress
                value={ctx.level}
                mt={5}
                h="20px"
                color="simplyOrange"
              />
            </Box>
          </Link>
        </Container>
      </Box>
    </Layout>
  );
}
