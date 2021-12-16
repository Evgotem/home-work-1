import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    city: yup.string().required('Укажите город'),
    street: yup.string().required('Укажите улицу'),
    home: yup.number().required('Укажите номер дома'),
    appartment: yup.number().required('Укажите номер квартиры'),
  })
  .required();

export const AddressForm = ({ nextStep, setFormValues }) => {
  const defaultValues = { firstName: '', lastName: '', email: '', password: '', city: '' };
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      city: '',
      street: '',
      home: 0,
      appartment: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormValues((prev) => {
      return { ...prev, ...data };
    });
    nextStep('result');
  };

  return (
    <>
      <TextField
        name="city"
        label="Город"
        margin="normal"
        {...register('city')}
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
      />
      <TextField
        name="street"
        label="Улица"
        margin="normal"
        {...register('street')}
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
      />
      <TextField
        name="home"
        label="Дом"
        margin="normal"
        {...register('home')}
        helperText={formState.errors.home && formState.errors.home.message}
        error={!!formState.errors.home}
      />
      <TextField
        name="appartment"
        label="Квартира"
        margin="normal"
        type="number"
        {...register('appartment')}
        helperText={formState.errors.appartment && formState.errors.appartment.message}
        error={!!formState.errors.appartment}
      />
      <div className="buttonWrapper">
        <Button
          onClick={() => reset(defaultValues)}
          type="reset"
          color="secondary"
          variant="contained"
          style={{ marginRight: '10px' }}
          fullWidth>
          Очистить
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary" fullWidth>
          Далее
        </Button>
      </div>
    </>
  );
};
