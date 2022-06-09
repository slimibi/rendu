import { Icon } from '@chakra-ui/react';
import React from 'react';

export function Message(props: any) {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path
        d="M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0Z"
        fill="currentColor"
      />
    </Icon>
  );
}
