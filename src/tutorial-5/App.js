import React from 'react'
import AlignItemsList from './Components/AlignItemsList'
import classes from './App.module.css'
import Form from './Components/Form.jsx'

const App = () => {

  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('comments'))) {
      setComments(JSON.parse(localStorage.getItem('comments')))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments])

  const onUpdateComments = (arrComments) => {
    setComments(prev => [...prev, ...arrComments])
  }

  return (
    <div className={ classes.wrapper }>
      <h2>Отзывы:</h2>

      {
        comments
        &&
        comments.map((item, index) => <AlignItemsList key={ index } name={ item.fullName } text={ item.text } />) 
      }
      <Form onUpdateComments={ onUpdateComments } comments={ comments } />
    </div>
  )
}

export default App
