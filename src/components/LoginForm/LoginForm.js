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
  InputRightAddon,
  IconButton,
  InputGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box marginTop={4}>
      <Container maxW="sm">
        <Card
          as="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          direction="column"
        >
          <CardBody>
            <FormLabel marginTop={4}>
              Email
              <Input type="email" name="email" variant="flushed" size="md" />
            </FormLabel>
            <FormLabel marginTop={4}>
              Password
              <InputGroup width="100%">
                <Input
                  type={show ? 'text' : 'password'}
                  name="password"
                  variant="flushed"
                  size="md"
                />
                <InputRightAddon>
                  <IconButton
                    aria-label="Toggle password visibility"
                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                    onClick={handleClick}
                    _hover="none"
                  ></IconButton>
                </InputRightAddon>
              </InputGroup>
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
