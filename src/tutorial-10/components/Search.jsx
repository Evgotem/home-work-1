import React from 'react'

export const Search = ({inputValue, onChangeInput, onClickSearch, isLoading}) => {


  
  return (
    <form className="app-form">
      <input 
        className="app-input" 
        type="text" 
        placeholder="Укажите GitHub-аккаунт" 
        value={inputValue} 
        onChange={event => onChangeInput(event)}
      />
      <button onClick={onClickSearch} className="app-form_btn" type='button' disabled={isLoading}>
        {isLoading ? 'Загрузка...' : 'Найти'}
      </button>
    </form>
  )
}
