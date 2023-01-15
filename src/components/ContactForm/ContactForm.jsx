import { Formik, ErrorMessage } from 'formik';
import React from 'react';
import { Button } from './ContactForm.styled';
import { StyledForm, FormInput, Label, ErrorText } from './ContactForm.styled';
import { ValidationSchema } from './Validation';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const INITIAL_VALUES = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('handleSubmit   values', values);
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
      <StyledForm>
        <Label>
          Please write the name
          <FormInput type="text" name="name"></FormInput>
          <ErrorMessage name="name" component={ErrorText}></ErrorMessage>
        </Label>
        <Label>
          Please write the phone number
          <FormInput type="tel" name="number"></FormInput>
          <ErrorMessage name="number" component={ErrorText}></ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
