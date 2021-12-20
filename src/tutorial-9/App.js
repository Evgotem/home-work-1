import React from 'react';
import './style.scss';

const App = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('https://60e0b5b96b689e001788cb8e.mockapi.io/users')
      const data = await response.json();
  
      setUsers(data) 
    } catch (error) {
      console.log('ошибка: ', error);
    } 
  }

  return (
    <div>
      <button onClick={getUsers}>Получить список пользователей</button>
      <button onClick={() => setUsers([])}>Очистить список</button>
      <ul>
        {users.map(obj => (
          <li key={obj.id}>{obj.username}</li>
        ))}
      </ul>
    </div>
  )
};

export default App;
