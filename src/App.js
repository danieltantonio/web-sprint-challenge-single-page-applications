import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';
import Pizza from './components/Pizza';

const NavBar = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  .logo-header {
    flex-grow:40;
  }

  h1 {
    color: red;
    padding-left: 5%;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-grow: 60;
    text-align: center;
    align-self: center;
  }
`;

const initFormVals = {
  size: '',
  sauce: '',
  topping: [],
  glutenfree: false,
  spinstruction: '',
  quantity: 1
}

const App = () => {
  const [formValues, setFormValues] = setFormValues(initFormVals);

  const onInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onToppingsChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]:[value, ...formValues]
    });
  }

  return (
    <div>
      <NavBar>
        <div className='logo-header'>
          <h1>Lambda Eats</h1>
        </div>
        <nav>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/pizza'>Pizza</Link>
          <Link className='link' to=''>Help</Link>
        </nav>
      </NavBar>
      <Switch>
        <Route path='/pizza'>
          <Pizza inputChange={onInputChange} toppingsChange={onToppingsChange} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
