import React from 'react';
import styled from 'styled-components';

const Pizza = (props) => {
    const { values, inputChange, toppingsChange, gluten, submit } = props;

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        inputChange(name, value)
    };

    const onToppingsChange = (evt) => {
        const { name } = evt.target;
        toppingsChange(name);
    };

    const onGlutenChange = (evt) => {
        gluten(evt.target.name)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        window.location = 'http://localhost:3000/pizza/order';
    }

  return(
      <div>
          <h3>Build Your Own Pizza</h3>
          <div className='form-header-img'></div>
          <h4>Build Your Own Pizza</h4>
          <form onSubmit={onSubmit}>
              <div className='choice-section'>
                  <div className='section-title-container'>
                    <label className='section-title'>Choice of Size</label>
                    <p className='required'>Required</p>
                  </div>
                  <div className='choice-input-section'>
                      <select onChange={onInputChange} id='choice-of-size' name='size' value={values.size}>
                          <option value=''>- Select an option -</option>
                          <option value='slice'>Slice</option>
                          <option value='quarter'>Quarter</option>
                          <option value='half'>Half</option>
                          <option value='pie'>Pie</option>
                      </select>
                  </div>
              </div>

              <div className='choice-section'>
                  <div className='section-title-container'>
                    <label className='section-title'>Choice of Sauce</label>
                    <p className='required'>Required</p>
                  </div>
                  <div className='choice-input-section'>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='original' onChange={onInputChange}/><p className='option-text'>Original Red</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='garlic' onChange={onInputChange}/><p className='option-text'>Garlic Ranch</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='bbq' onChange={onInputChange}/><p className='option-text'>BBQ Sauce</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='spinach' onChange={onInputChange}/><p className='option-text'>Spinach Alfredo</p>
                      </div>
                  </div>
              </div>

              <div className='choice-section'>
                <div className='section-title-container'>
                    <label className='section-title'>Add Toppings</label>
                    <p className='required'>Choose up to 10</p>
                </div>

                <div className='choice-input-section'>
                  <div className='input-row'>
                    <input type='checkbox' name='pepperoni' value={true} onChange={onToppingsChange} checked={values.toppings.pepperoni === true} onChange={onToppingsChange}/><p className='option-text'>Pepperoni</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='sausage' value={true} onChange={onToppingsChange} checked={values.toppings.sausage === true} /><p className='option-text'>Sausage</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='bacon' value={true} onChange={onToppingsChange} checked={values.toppings.bacon === true}/><p className='option-text'>Canadian Bacon</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='italiansausage' value={true} onChange={onToppingsChange} checked={values.toppings.italiansausage === true}/><p className='option-text'>Italian Sausage</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='chicken' value={true} onChange={onToppingsChange} checked={values.toppings.chicken === true}/><p className='option-text'>Grilled Chicken</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='onions' value={true} onChange={onToppingsChange} checked={values.toppings.onions === true}/><p className='option-text'>Onions</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='pepper' value={true} onChange={onToppingsChange} checked={values.toppings.pepper === true}/><p className='option-text'>Green Pepper</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='tomatoes' value={true} onChange={onToppingsChange} checked={values.toppings.tomatoes === true}/><p className='option-text'>Diced Tomatoes</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='olives' value={true} onChange={onToppingsChange} checked={values.toppings.olives === true}/><p className='option-text'>Black Olives</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='garlic' value={true} onChange={onToppingsChange} checked={values.toppings.garlic === true}/><p className='option-text'>Roasted Garlic</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='artichoke' value={true} onChange={onToppingsChange} checked={values.toppings.artichoke === true}/><p className='option-text'>Artichoke Hearts</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='cheese' value={true} onChange={onToppingsChange} checked={values.toppings.cheese === true}/><p className='option-text'>Tree Cheese</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='pineapple' value={true} onChange={onToppingsChange} checked={values.toppings.pineapple === true}/><p className='option-text'>Pineapple</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='xcheese' value={true} onChange={onToppingsChange} checked={values.toppings.xcheese === true}/><p className='option-text'>Extra Cheese</p>
                  </div>
                </div>
              </div>

              <div className='choice-section'>
                <div className='section-title-container'>
                    <label className='section-title'>Choice of Substitues</label>
                    <p className='required'>Choose up to 1</p>
                </div>

                <div className='choice-input-section'>
                    <input type='checkbox' name='glutenfree' value={values.glutenfree} checked={values.glutenfree === true} onChange={onGlutenChange}/><p className='option-text'>Gluten Free Crust (+ $1.00)</p>
                </div>
              </div>

              <div className='choice-section'>
                <div className='section-title-container'>
                  <label className='section-title'>Special Instructions</label>
                </div>
                <div className='choice-input-section'>
                    <input type='text' name='spinstructions' value={values.spinstructions} onChange={onInputChange}></input>
                </div>
              </div>

              <div className='submit-section'>
                  <input type='number' name='quantity' min={1} max={99} value={values.quantity} onChange={onInputChange}/>
                  <button type='submit'>Add to Order</button>
              </div>
          </form>
      </div>
  )
}

export default Pizza;