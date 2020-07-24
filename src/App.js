import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';
import Pizza from './components/Pizza';
import Order from './components/Order';

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
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    italiansausage: false,
    chicken: false,
    onions: false,
    pepper: false,
    tomatoes: false,
    olives: false,
    garlic: false,
    artichoke: false,
    cheese: false,
    pineapple: false,
    xcheese: false
  },
  glutenfree: false,
  spinstructions: '',
  quantity: 1
}

const App = () => {
  const [formValues, setFormValues] = useState(initFormVals);
  const [order, setOrder] = useState(null);

  const onInputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const onToppingsChange = (name) => {
    if(formValues.toppings[name] === false) {
      setFormValues({
        ...formValues,
        toppings: {
          ...formValues.toppings,
          [name]: true
        }
      })
    } else {
      setFormValues({
        ...formValues,
        toppings: {
          ...formValues.toppings,
          [name]: false
        }
      })
    }
  };

  const wantsGluten = (name) => {
    if(formValues.glutenfree === false) {
      setFormValues({
        ...formValues,
        glutenfree: true
      })
    } else {
      setFormValues({
        ...formValues,
        glutenfree: false
      })
    }
  };

  const submit = () => {
    const cleanForm = {
      instructions: formValues.spinstructions.trim(),
      glutenfree: formValues.glutenfree,
      quantity: formValues.quantity,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: []
    }

    Object.keys(formValues.toppings).forEach(key => {
      if(formValues.toppings[key] === true) {
        cleanForm.toppings.push(key)
      }
    });

    setOrder(cleanForm)
    setFormValues(initFormVals);
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
        <Route path='/pizza/order'>
          <Order order={order}/>
        </Route>

        <Route path='/pizza'>
          <Pizza submit={submit} values={formValues} inputChange={onInputChange} toppingsChange={onToppingsChange} gluten={wantsGluten}/>
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
