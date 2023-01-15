import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      return toast.error('All fields are required!');
    } else if (password.length < 6) {
      return toast.error('Password must contain at least 7 symbols!');
    }
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
