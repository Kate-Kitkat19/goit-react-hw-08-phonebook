import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Card,
  Center,
  CardBody,
  useToast,
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
// import { useSelector } from 'react-redux';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { selectError } from 'redux/auth/selectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  // const error = useSelector(selectError);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
            <FormLabel marginTop={2}>
              Username
              <Input type="text" name="name" variant="flushed" size="md" />
            </FormLabel>
            <FormLabel marginTop={2}>
              Email
              <Input type="email" name="email" variant="flushed" size="md" />
            </FormLabel>
            <FormLabel marginTop={2}>
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
                  ></IconButton>
                </InputRightAddon>
              </InputGroup>
            </FormLabel>
            <Center w="100%" py="3">
              <Button type="submit" colorScheme="green">
                Register
              </Button>
            </Center>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default RegisterForm;
