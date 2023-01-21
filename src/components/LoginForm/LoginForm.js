import { useDispatch, useSelector } from 'react-redux';
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
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { selectAuthError } from 'redux/auth/selectors';
import { ErrorComponent } from 'components/ErrorNotification/ErrorNotification';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const iconColor = useColorModeValue('gray.100', 'whiteAlpha-300');
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
        {error && <ErrorComponent action="login"></ErrorComponent>}
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
                    background={iconColor}
                    _hover={{ background: iconColor }}
                  ></IconButton>
                </InputRightAddon>
              </InputGroup>
            </FormLabel>
            <Center w="100%" py="3">
              <Button type="submit" colorScheme="green">
                Log In
              </Button>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginForm;
