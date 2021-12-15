import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required('Введите имя').min(2, 'Слишком короткое имя'),
    lastName: yup.string().required('Введите фамилию').min(2, 'Слишком короткая фамилия'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().when('email', {
      is: (value) => value.includes('@'),
      then: yup.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    }),
  })
  .required();

export const PresonalInfoForm = () => {
  const defaultValues = { firstName: '', lastName: '', email: '', password: '' };
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <TextField
        name="firstName"
        label="Имя"
        margin="normal"
        {...register('firstName')}
        helperText={formState.errors.firstName && formState.errors.firstName.message}
        error={!!formState.errors.firstName}
      />
      <TextField
        name="lastName"
        label="Фамилия"
        margin="normal"
        {...register('lastName')}
        helperText={formState.errors.lastName && formState.errors.lastName.message}
        error={!!formState.errors.lastName}
      />
      <TextField
        name="email"
        label="email"
        margin="normal"
        {...register('email')}
        helperText={formState.errors.email && formState.errors.email.message}
        error={!!formState.errors.email}
      />
      <TextField
        name="password"
        label="Пароль"
        margin="normal"
        {...register('password')}
        helperText={formState.errors.password && formState.errors.password.message}
        error={!!formState.errors.password}
        type="password"
      />
      <div className="buttonWrapper">
        <Button
          onClick={() => reset(defaultValues)}
          type="reset"
          color="secondary"
          variant="contained"
          style={{ marginRight: '10px' }}
          fullWidth
        >
          Очистить
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="default" fullWidth>
          Далее
        </Button>
      </div>
    </>
  );
};
