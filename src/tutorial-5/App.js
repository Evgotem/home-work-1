import React from 'react'
import AlignItemsList from './Components/AlignItemsList'
import classes from './App.module.css'
import Form from './Components/Form.jsx'

const App = () => {

  const [initMessage, setInitMessage] = React.useState()
  const [newMessage, setNewMessage] = React.useState();

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('comments'))) {
      setInitMessage([JSON.parse(localStorage.getItem('comments'))])
    }
  }, [])

  const onUpdateComments = (arrComments) => {
    setNewMessage(arrComments)
  }

  return (
    <div className={ classes.wrapper }>
      <h2>Отзывы:</h2>
      {
        initMessage
        &&
        initMessage.length !== 0
        &&
        initMessage.map(item => <AlignItemsList key={ item.fullName + item.text } name={ item.fullName } text={ item.text } />)
      }
      {
        newMessage
        &&
        newMessage.length !== 0
        &&
        newMessage.map(item => <AlignItemsList key={ item.fullName + item.text } name={ item.fullName } text={ item.text } />)
      }
      <Form onUpdateComments={ onUpdateComments } />
    </div>
  )
}

export default App
