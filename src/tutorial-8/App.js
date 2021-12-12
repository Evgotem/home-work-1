import React from 'react';
import './style.scss';

import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const App = () => {
  const defaultValues = { firstName: '', lastName: '', email: '', password: '' }
  const { handleSubmit, register, formState, reset } = useForm(defaultValues);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="wrapper">
      <TextField
        name="firstName"
        label="Имя"
        margin="normal"
        {...register('firstName', {
          required: 'Представься',
        })}
        helperText={formState.errors.firstName && formState.errors.firstName.message}
        error={!!formState.errors.firstName}
      />
      <TextField
        name="lastName"
        label="Фамилия"
        margin="normal"
        {...register('lastName', {
          required: 'Представься до конца!',
        })}
        helperText={formState.errors.lastName && formState.errors.lastName.message}
        error={!!formState.errors.lastName}
      />
      <TextField
        name="email"
        label="email"
        margin="normal"
        {...register('email', {
          required: 'Мыло черкни',
          pattern: {
            value:
              /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
            message: 'Настоящее мыло надо!',
          },
        })}
        helperText={formState.errors.email && formState.errors.email.message}
        error={!!formState.errors.email}
      />
      <TextField
        name="password"
        label="Пароль"
        margin="normal"
        {...register('password', {
          required: 'Шифр запили',
        })}
        helperText={formState.errors.password && formState.errors.password.message}
        error={!!formState.errors.password}
        type="password"
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}>
        Зарегистрироваться
      </Button>
      <Button
        onClick={() => reset(defaultValues)}
        type="reset"
        color="secondary"
        variant="contained"
        style={{ marginTop: '10px' }}>
        Очистить
      </Button>
    </form>
  );
};

export default App;
