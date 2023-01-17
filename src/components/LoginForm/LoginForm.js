import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Card,
  Center,
  CardBody,
  Box,
  Input,
  Button,
  Container,
  FormLabel,
} from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
            <FormLabel marginTop={2}>Email</FormLabel>
            <Input type="email" name="email" variant="flushed" size="md" />

            <FormLabel marginTop={2}>
              Password
              <Input
                type="password"
                name="password"
                variant="flushed"
                size="md"
              />
            </FormLabel>
            <Center w="100%" py="3">
              <Button type="submit">Log In</Button>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginForm;
