import React from 'react';
import styled from 'styled-components';

const Pizza = (props) => {
    const { inputChange, toppingsChange } = props;

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        inputChange(name, value)
    };

    const onToppingsChange = (evt) => {
        const { name, value } = evt.target;
        toppingsChange(name, value);
    };

  return(
      <div>
          <h3>Build Your Own Pizza</h3>
          <div className='form-header-img'></div>
          <h4>Build Your Own Pizza</h4>
          <form>
              <div className='choice-section'>
                  <div className='section-title-container'>
                    <label className='section-title'>Choice of Size</label>
                    <p className='required'>Required</p>
                  </div>
                  <div className='choice-input-section'>
                      <select id='choice-of-size' name='size'>
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
                        <input type='radio' name='sauce' value='original' /><p className='option-text'>Original Red</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='original' /><p className='option-text'>Garlic Ranch</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='bbq' /><p className='option-text'>BBQ Sauce</p>
                      </div>
                      <div className='input-row'>
                        <input type='radio' name='sauce' value='spinach' /><p className='option-text'>Spinach Alfredo</p>
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
                    <input type='checkbox' name='topping' value='pepperoni' /><p className='option-text'>Pepperoni</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='sausage' /><p className='option-text'>Sausage</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='bacon' /><p className='option-text'>Canadian Bacon</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='italiansausage' /><p className='option-text'>Italian Sausage</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='chicken' /><p className='option-text'>Grilled Chicken</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='onions' /><p className='option-text'>Onions</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='pepper' /><p className='option-text'>Green Pepper</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='tomatoes' /><p className='option-text'>Diced Tomatoes</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='olives' /><p className='option-text'>Black Olives</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='garlic' /><p className='option-text'>Roasted Garlic</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='artichoke' /><p className='option-text'>Artichoke Hearts</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='cheese' /><p className='option-text'>Tree Cheese</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='pineapple' /><p className='option-text'>Pineapple</p>
                  </div>
                  <div className='input-row'>
                    <input type='checkbox' name='topping' value='xcheese' /><p className='option-text'>Extra Cheese</p>
                  </div>
                </div>
              </div>

              <div className='choice-section'>
                <div className='section-title-container'>
                    <label className='section-title'>Choice of Substitues</label>
                    <p className='required'>Choose up to 1</p>
                </div>

                <div className='choice-input-section'>
                    <input type='checkbox' name='glutenfree' /><p className='option-text'>Gluten Free Crust (+ $1.00)</p>
                </div>
              </div>

              <div className='choice-section'>
                <div className='section-title-container'>
                  <label className='section-title'>Special Instructions</label>
                </div>
                <div className='choice-input-section'>
                    <input type='text' name='spinstructions'></input>
                </div>
              </div>

              <div className='submit-section'>
                  <input type='number' name='quantity' min={1} max={99} />
                  <button type='submit'>Add to Order</button>
              </div>
          </form>
      </div>
  )
}

export default Pizza;