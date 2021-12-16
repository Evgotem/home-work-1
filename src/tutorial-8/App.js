import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { AddressForm } from './forms/AddressForm';
import { PresonalInfoForm } from './forms/PersonalInfoForm';
import { Result } from './forms/Result';
import './style.scss';

const App = () => {
  const [formValues, setFormValues] = React.useState({})
  const history = useHistory();
  const nextStep = (name) => {
    history.push(name)
  }
  console.log(formValues);

  return (
    <form className="wrapper">
      <Route path='/' render={() => <PresonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />} exact />
      <Route path='/address' render={() => <AddressForm nextStep={nextStep} setFormValues={setFormValues} />} /> 
      <Route path='/result' render={() => <Result formValues={formValues} />} /> 
    </form>
  );
};

export default App;
