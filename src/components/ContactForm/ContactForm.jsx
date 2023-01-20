import { Formik, Field } from 'formik';
import React from 'react';
import { ValidationSchema } from './Validation';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Icon,
  Button,
  InputLeftAddon,
  FormControl,
  FormErrorMessage,
  Container,
  Input,
  VStack,
  InputGroup,
  useToast,
} from '@chakra-ui/react';

import { PhoneIcon } from '@chakra-ui/icons';
import { ImUser } from 'react-icons/im';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <Container marginBottom={4} centerContent maxW="sm">
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, { resetForm }) => {
          const contactName = values.name.toLowerCase();
          const isSaved = contacts.find(
            contact => contact.name.toLowerCase() === contactName
          );
          if (isSaved) {
            return toast({
              title: `${values.name} is already in contacts`,
              position: 'top',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          } else {
            dispatch(addContact({ name: values.name, number: values.number }));
          }
          resetForm();
        }}
        validationSchema={ValidationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired isInvalid={!!errors.name && touched.name}>
                <InputGroup>
                  <InputLeftAddon
                    pointerEvents="none"
                    children={<Icon as={ImUser} color="gray.300" />}
                  />
                  <Field
                    as={Input}
                    type="text"
                    name="name"
                    placeholder="Name"
                    width="full"
                    borderColor="teal.100"
                    errorBorderColor="red.400"
                  ></Field>
                </InputGroup>
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.number && touched.number}>
                <InputGroup>
                  <InputLeftAddon
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Field
                    as={Input}
                    type="tel"
                    name="number"
                    placeholder="Phone number"
                    width="full"
                    borderColor="teal.200"
                    errorBorderColor="red.400"
                  ></Field>
                </InputGroup>
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                aria-label="Add contact"
                colorScheme="green"
                width="full"
              >
                Add contact
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
