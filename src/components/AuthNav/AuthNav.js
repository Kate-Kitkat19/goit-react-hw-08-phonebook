import { NavLink } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <HStack spacing={4}>
      <Button as={NavLink} to="/register">
        Register
      </Button>
      <Button as={NavLink} to="/login">
        Log In
      </Button>
    </HStack>
  );
};
