import React from 'react'
import { Paper } from "@mui/material";

export const Result = ({formValues}) => {
  return (
    <Paper style={{padding: '20px'}}>
      <h2>Итоговая информация:</h2>
      <ul>
        <li>
          <b>Имя:</b> {formValues.firstName}
        </li>
        <li>
          <b>Фамилия:</b> {formValues.lastName}
        </li>
        <li>
          <b>Email:</b> {formValues.email}
        </li>
        <li>
          <b>Адрес:</b> Город {formValues.city}, улица {formValues.street}, дом {formValues.home},  квартира {formValues.appartment}
        </li>
      </ul>
    </Paper>
  )
}
