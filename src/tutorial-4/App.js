import React from 'react'
import './App.css'
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {

  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
  ];

  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
  ];


  const [phrase, setPhrase] = React.useState([]);

  const getRandomIndex = arr => {
    return Math.floor(Math.random() * arr.length);
  }

  const generatePhrase = () => {
    let randomPhrase = `${adjectivesArr[getRandomIndex(adjectivesArr)]} ${adjectivesArr[getRandomIndex(adjectivesArr)]} ${nounsArr[getRandomIndex(nounsArr)]}`
    setPhrase(prev => [...prev, randomPhrase])
  }

  const resetPhrase = () => setPhrase([]);

  return (
    <div className="wrapper">

      {
        phrase.length !== 0 ?
          <Phrase phrase={ phrase } />
          :
          <EmptyBlock />
      }

      <button className="btn btn_generate" onClick={ generatePhrase }>Сгенерировать</button>
      <button className="btn btn_clear" onClick={ resetPhrase }>Очистить</button>
    </div>
  )
}

export default App
