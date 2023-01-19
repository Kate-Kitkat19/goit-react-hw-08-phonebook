import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export const ErrorComponent = ({ action }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>`Sorry, {action} failed`</AlertTitle>
      <AlertDescription>Please try again later</AlertDescription>
    </Alert>
  );
};
