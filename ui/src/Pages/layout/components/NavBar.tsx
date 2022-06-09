import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../Context';
import Axios, { AxiosResponse } from 'axios';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text
} from '@chakra-ui/react';

import { Hamburger, User, Admin } from '../../img/index';

const NavBar = () => {
  const ctx = useContext(myContext);

  const logout = () => {
    Axios.get('http://localhost:4000/logout', {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    });
  };
  return (
    <Box bg="simplyOrange" p={4}>
      <Flex>
        <Text color="white" textStyle="h4" ml={4} flex="1">
          <Link to="/" className="whited">
            SimplyAlgo
          </Link>
        </Text>
        {ctx ? (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Hamburger />}
                variant="none"
              />

              <MenuList>
                <Link onClick={logout} to="/logout">
                  <MenuItem icon={<User />}>Déconnexion</MenuItem>
                </Link>
                <hr />
                {ctx.isAdmin ? (
                  <Link to="/admin">
                    <MenuItem icon={<Admin />} mt={3} mb={3}>
                      Admin
                    </MenuItem>
                  </Link>
                ) : null}
                <hr />
                <Link to="/profile">
                  <MenuItem icon={<User />} mt={3}>
                    Profile
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<Hamburger />}
                  variant="none"
                />
                <MenuList>
                  <Link to="/login">
                    <MenuItem icon={<User />}>Connexion</MenuItem>
                  </Link>
                  <hr />
                  <Link to="/register">
                    <MenuItem icon={<User />} mt={3}>
                      Inscription
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export { NavBar };
