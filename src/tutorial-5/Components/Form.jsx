import * as React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';


export default function Form({ onUpdateComments, comments }) {

  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  

  const formRef = React.useRef();



  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && text.trim()) {
      
      onUpdateComments([
        {
          'fullName': name,
          'email': email,
          'createdAt': new Date(),
          'text': text
        }
      ]);
    } else {
      alert('Заполните все поля!')
    }
    
    formRef.current.reset();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h3' mb={ 2 }>Обратная связь:</Typography>
        <form ref={ formRef }>
          <Grid container spacing={ 1 }>
            <Grid item xs={ 12 }>
              <TextField onChange={ handleChangeName } type='text' label="" placeholder="Имя" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={ 12 }>
              <TextField onChange={ handleChangeEmail } type='text' label="" placeholder="email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={ 12 }>
              <TextField onChange={ handleChangeText } type='text' multiline rows={ 4 } label="" placeholder="Введите текст..." variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={ 12 }>
              <Button onClick={ handleClick } type='submit' variant='contained' color='primary' fullWidth>Отправить</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
