import React from 'react'
import AlignItemsList from './Components/AlignItemsList'
import classes from './App.module.css'
import Form from './Components/Form.jsx'

const App = () => {

  const [initMessage, setInitMessage] = React.useState([])
  const [newMessage, setNewMessage] = React.useState();

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('comments')).length !== 0) {
      setInitMessage(JSON.parse(localStorage.getItem('comments')))
    }
  }, [])

  const onUpdateComments = (arrComments) => {
    setNewMessage(arrComments)
  }

  return (
    <div className={ classes.wrapper }>
      <h2>Отзывы:</h2>
      {
        initMessage.length > 1
        &&
        initMessage.map(item => <AlignItemsList key={ item.fullName + item.text } name={ item.fullName } text={ item.text } />)
      }
      {
        newMessage
        &&
        newMessage.map(item => <AlignItemsList key={ item.fullName + item.text } name={ item.fullName } text={ item.text } />)
      }
      <Form onUpdateComments={ onUpdateComments } />
    </div>
  )
}

export default App
