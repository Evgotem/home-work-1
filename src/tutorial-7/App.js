import React from 'react';
import './style.scss';

import { TextField, Button } from '@mui/material';

const App = () => {
  const [fields, setFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleClickClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const hadleClickRegister = () => {
    if (!fields.email.includes('@')) {
      alert('Почта неверная!');
      return;
    }
    if (fields.firstName.length < 2 || fields.lastName.length < 2) {
      alert('Имя или фамилия указаны неверно!');
      return;
    }
    if (fields.password.length < 6) {
      alert('Пароль должен быть больше 5 символов!');
      return;
    }

    console.log('Зарегистрировались!', fields);
    handleClickClear();
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const isValid = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password;
  const isValidForClear = !!fields.firstName || !!fields.lastName || !!fields.email || !!fields.password;

  return (
    <div className="wrapper">
      <TextField
        name="firstName"
        label="Имя"
        margin="normal"
        value={fields.firstName}
        onChange={handleChangeInput}
      />
      <TextField
        name="lastName"
        label="Фамилия"
        margin="normal"
        value={fields.lastName}
        onChange={handleChangeInput}
      />
      <TextField
        name="email"
        label="email"
        margin="normal"
        value={fields.email}
        onChange={handleChangeInput}
      />
      <TextField
        name="password"
        label="Пароль"
        margin="normal"
        value={fields.password}
        onChange={handleChangeInput}
        type="password"
      />
      <Button
        disabled={!isValid}
        onClick={hadleClickRegister}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}>
        Зарегистрироваться
      </Button>
      <Button
        disabled={!isValidForClear}
        onClick={handleClickClear}
        color="secondary"
        variant="contained"
        style={{ marginTop: '10px' }}>
        Очистить
      </Button>
    </div>
  );
};

export default App;
