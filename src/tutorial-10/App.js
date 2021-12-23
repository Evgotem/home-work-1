import React from 'react'
import axios from 'axios'
import { Search } from './components/Search';
import { UserInfo } from './components/UserInfo';
import './index.css'

function App() {

  const [inputValue, setInputValue] = React.useState('')
  const [userData, setUserData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setUserData(null)
  }, [])

  const onChangeInput = event => {
    setInputValue(event.target.value);
  }  
  
  const onClickSearch = async () => {
    if (inputValue !== '') {
      try {
        setIsLoading(true)
        const response = await axios.get(`https://api.github.com/users/${inputValue}`)
        const { data } = response
        setUserData(data)
        setIsLoading(false)
      } catch (error) {
        alert(`Аккаунт с именем '${inputValue}' не найден`);
      }
    } else {
      alert('Введите Github аккаунт!')
    }
    setInputValue('');


    // const url = new URL(window.location.href);
    // url.searchParams.set('login', userData.login)

  }
  
  return (
    <div id="app">
      <div className="app-container">
        <Search 
          inputValue={inputValue} 
          onChangeInput={onChangeInput} 
          onClickSearch={onClickSearch}
          isLoading={isLoading}
        />
        {!!userData && <UserInfo userData={userData} />}
      </div>
    </div>
  );
}

export default App;
