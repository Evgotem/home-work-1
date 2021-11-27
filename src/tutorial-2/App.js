import React from 'react'
import './App.css'

const App = () => {

  let email = '';
  let password = '';

  const handleChangeInput = (event) => {
    if (event.target.name === 'email') {
      email = event.target.value;
    } else {
      password = event.target.value;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Заполните все поля')
    } else {
      console.log({ email, password })
      email = '';
      password = '';
      event.target.reset()
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="E-Mail" onChange={handleChangeInput} />
        <input name="password" type="password" placeholder="Пароль" onChange={handleChangeInput} />
        <button type="submit">Войти</button>
      </form>
  )
}



export default App
