import { Formik, ErrorMessage, Field, Form } from 'formik';
import React from 'react';
// import { Button } from './ContactForm.styled';
import { ErrorText, Button } from './ContactForm.styled';
import { ValidationSchema } from './Validation';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { Icon } from '@chakra-ui/react';

import { Input, VStack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { ImUser } from 'react-icons/im';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const INITIAL_VALUES = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const contactName = values.name.toLowerCase();
    const isSaved = contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact({ name: values.name, number: values.number })).then(
        toast.success('Contact has been added')
      );
    }
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
      initialValues={{ ...INITIAL_VALUES }}
    >
      <Form>
        <VStack spacing={4} align="flex-start">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={ImUser} color="gray.300" />}
            />
            <Field
              as={Input}
              type="text"
              name="name"
              placeholder="Name"
              width="auto"
            ></Field>
            <ErrorMessage name="name" component={ErrorText}></ErrorMessage>
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Field
              as={Input}
              type="tel"
              name="number"
              placeholder="Phone number"
              width="auto"
            ></Field>
            <ErrorMessage name="number" component={ErrorText}></ErrorMessage>
          </InputGroup>

          <Button type="submit" aria-label="Add contact">
            Submit
          </Button>
        </VStack>
      </Form>
    </Formik>
  );
};

export default ContactForm;
