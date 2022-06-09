import React, { useEffect, useState, useContext } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { myContext } from './Context';
import { UserInterface } from '../Interfaces/Interfaces';
import { Box, Button, Text, useToast } from '@chakra-ui/react';
import Layout from './layout/Layout';

export default function AdminPage() {
  const ctx = useContext(myContext);
  const toast = useToast();
  const [data, setData] = useState<UserInterface[]>();
  const [selectedUser, setSelectedUser] = useState<string>();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  useEffect(() => {
    Axios.get('http://localhost:4000/getallusers', {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      setData(
        res.data.filter((item: UserInterface) => {
          return item.username !== ctx.username;
        })
      );
    });
  }, [ctx]);
  if (!data) {
    return null;
  }

  const deleteUser = async () => {
    let userid: string;
    data.forEach(async (item: UserInterface) => {
      if (item.username === selectedUser) {
        userid = item.id;
      }
    });

    Axios.post(
      'http://localhost:4000/deleteuser',
      {
        id: userid!
      },
      {
        withCredentials: true
      }
    );
    toast({
      title: "L'utilisateur a bien été supprimer",
      status: 'success',
      duration: 2000,
      isClosable: true
    });
    await timeout(3000);
    window.location.href = '/admin';
  };

  const isAdmin = {
    isAdmin: true
  };

  const AdminUser = () => {
    let userid: string;
    data.forEach(async (item: UserInterface) => {
      if (item.username === selectedUser) {
        userid = item.id;
      }
    });

    Axios.put(`http://localhost:4000/user/${userid!}`, isAdmin).then(
      async (res: AxiosResponse) => {
        if (res.data === 'success') {
        } else {
          toast({
            title: 'Le compte est maintenant admin',
            status: 'success',
            duration: 2000,
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/admin';
        }
      }
    );
  };

  return (
    <Layout>
      <Box mt={5} textAlign="center">
        <Text textStyle="h2" mb={5}>
          Page Admin
        </Text>
        <select
          onChange={(e) => setSelectedUser(e.target.value)}
          name="deleteuser"
          id="deleteuser"
        >
          <option id="Select a user">Selectionner un utilisateur </option>
          {data.map((item: UserInterface) => {
            return (
              <option key={item.username} id={item.username}>
                {item.username}
              </option>
            );
          })}
        </select>
        <Button ml={5} variant="orange" onClick={deleteUser}>
          Suprimer l'utilisateur
        </Button>
        <Button ml={5} variant="orange" onClick={AdminUser}>
          Admin Utilisateur{' '}
        </Button>
      </Box>
    </Layout>
  );
}
