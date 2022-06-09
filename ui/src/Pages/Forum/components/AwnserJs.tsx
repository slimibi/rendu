import React, { useContext, useState } from 'react';
import Layout from '../../layout/Layout';
import {
  Box,
  useToast,
  Button,
  FormControl,
  FormLabel,
  Textarea
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';

export default function Awnser() {
  const [msg, setMsg] = useState<string>('');
  const toast = useToast();
  const ctx = useContext(myContext);

  const forum = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/forumjs',
        {
          username: ctx.username,
          msg
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Message envoyé',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/functionjsx';
        } else {
          toast({
            title: "Une erreur s'est produite..",
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      });
  };
  return (
    <Layout>
      <Box
        h={['600px', '200px', '200px', '200px']}
        py={20}
        mx="20rem"
        flexDirection={['column', 'row', 'row', 'row', 'row']}
        justifyContent={['none', 'center', 'center', 'center', 'center']}
        textAlign="center"
      >
        <FormControl isRequired color="simplyAlgo">
          <FormLabel
            mt={10}
            fontWeight="700"
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
          >
            Message
          </FormLabel>
          <Textarea
            textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
            type="text"
            size="sm"
            onChange={(e: any) => setMsg(e.target.value)}
          />
        </FormControl>
        <Button onClick={forum} fontSize="20px" variant="orange" p={6} mt={10}>
          Envoyer
        </Button>
      </Box>
    </Layout>
  );
}
