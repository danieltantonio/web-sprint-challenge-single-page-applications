import React, { useState, useEffect } from "react";
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup'

import Home from './components/Home';
import Pizza from './components/Pizza';
import Order from './components/Order';

import formSchema from './validation/formSchema';

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
  name: '',
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
  toppingcount: 0,
  glutenfree: false,
  spinstructions: '',
  quantity: 1
}

const initFormErrors = {
  name: '',
  size: '',
  sauce: '',
  toppingcount: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initFormVals);
  const [order, setOrder] = useState(null);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState();
  const history = useHistory();


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
        },
        toppingcount: formValues.toppingcount + 1
      })
    } else {
      setFormValues({
        ...formValues,
        toppings: {
          ...formValues.toppings,
          [name]: false
        },
        toppingcount: formValues.toppingcount - 1
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
      name: formValues.name.trim(),
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

    history.push('/pizza/order');
    // setOrder(cleanForm)
    setFormValues(initFormVals);
  };

  useEffect(() => {
    console.log(formValues.toppingcount)
    yup
      .reach(formSchema, 'toppingcount')
      .validate(formValues.toppingcount)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          toppingcount: ""
        })
      }).catch(err => {
        setFormErrors({
          ...formErrors,
          toppingcount: err.message
        })
      });
  }, [formValues.toppingcount]);

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
          <Pizza disabled={disabled} errors={formErrors} submit={submit} values={formValues} inputChange={onInputChange} toppingsChange={onToppingsChange} gluten={wantsGluten}/>
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
