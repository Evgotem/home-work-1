import React from 'react';

import './style.scss';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [data, setData] = React.useState({
    name: '',
    email: '',
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value, 
    });
  };

  const getUsers = async () => {
    const { data } = await axios.get('https://60e0b5b96b689e001788cb8e.mockapi.io/users');
    setUsers(data);
  };

  const createUser = () => {
    if (data.name && data.email) {
      axios.post('https://60e0b5b96b689e001788cb8e.mockapi.io/users', data);
    } else {
      alert ('заполните все поля!')
    }
    setData({
      name: '',
      email: '',
    });
  };

  return (
    <div>
      <button onClick={getUsers}>Получить список пользователей</button>
      <button onClick={() => setUsers([])}>Очистить список</button>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <hr />
      <h2>Создать пользователя:</h2>
      <input
        value={data.name}
        name="name"
        type="text"
        placeholder="Введите имя"
        onChange={onInputChange}
      />
      <input
        value={data.email}
        name="email"
        type="text"
        placeholder="Введите email"
        onChange={onInputChange}
      />
      <button onClick={createUser}>Добавить пользователя</button>
    </div>
  );
};

export default App;
