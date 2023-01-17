import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Card, Center, CardBody, CardFooter } from '@chakra-ui/react';
import {
  useToast,
  Box,
  Input,
  Button,
  Container,
  FormLabel,
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
    <Box marginTop={4}>
      <Container>
        <Card
          as="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          direction="column"
        >
          <CardBody>
            <FormLabel>
              Username
              <Input type="text" name="name" variant="flushed" size="md" />
            </FormLabel>
            <FormLabel>
              Email
              <Input type="email" name="email" variant="flushed" size="md" />
            </FormLabel>
            <FormLabel>
              Password
              <Input
                type="password"
                name="password"
                variant="flushed"
                size="md"
              />
            </FormLabel>
            <Center w="100%" py="3">
              <Button type="submit">Register</Button>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default RegisterForm;
