import React from 'react'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <div>
      <Profile name="Вася" registredAt={new Date(2021, 5, 22)} />
    </div>
  )
}

export default App
