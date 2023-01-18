import { Alert } from '@chakra-ui/react';
import { AlertIcon } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      Sorry, we couldn`t find this path :(
    </Alert>
  );
};
