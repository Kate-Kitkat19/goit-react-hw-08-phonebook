import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Text, Button, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { selectError } from 'redux/auth/selectors';
// import { useSelector } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  // const error = useSelector(selectError);

  return (
    <HStack>
      <Text fontSize="xl" fontFamily="'Open Sans', sans-serif">
        Welcome, {user.name}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut()).unwrap().then(navigate('/'))}
      >
        Logout
      </Button>
    </HStack>
  );
};
