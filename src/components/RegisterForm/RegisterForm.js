import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  useToast,
  Box,
  Flex,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      return toast({
        title: 'All fields are required',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else if (password.length < 6) {
      return toast({
        title: 'Password must contain at least 7 symbols!',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <Box>
      <Container>
        <Flex
          as="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          
          direction="column"
        >
          <label>
            Username
            <Input type="text" name="name" variant="flushed" size="md" />
          </label>
          <label>
            Email
            <Input type="email" name="email" variant="flushed" size="md" />
          </label>
          <label>
            Password
            <Input
              type="password"
              name="password"
              variant="flushed"
              size="md"
            />
          </label>
          <Button type="submit">Register</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default RegisterForm;
