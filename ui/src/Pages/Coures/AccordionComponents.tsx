import React from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Link
} from '@chakra-ui/react';

export default function AccordionComponents() {
  return (
    <Box position="sticky" top="0">
      <Text
        textStyle="h6"
        textAlign={['center', 'unset', 'unset', 'unset']}
        mt={[5, 0, 0, 0]}
      >
        Sommaire :{' '}
      </Text>
      <Accordion allowMultiple>
        <AccordionItem mt={5}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Etape 1
            </Box>
            <AccordionIcon w={['20px']} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List stylePosition="inside">
              <ListItem py={1}>
                <Link href={'#Prérequis'} variant="summary">
                  {' '}
                  <strong>1.</strong> Une première définition du JavaScript
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link href={'#jsJava'} variant="summary">
                  <strong>2.</strong> JavaScript vs Java
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link href={'#Exercice'} variant="summary">
                  <strong>3.</strong> Exercice
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
