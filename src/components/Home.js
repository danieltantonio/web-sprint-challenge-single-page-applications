import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;

  hr {
      width: 90%;
  }

  .jumbotron {
      height: 45vh;
      background-image: url("https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
      background-size: cover;
      background-position: right;
      border-radius: 12px;
      position: inherit;
  }

  .jumbotron-text {
      font-size: 30px;
      padding: 5% 35% 0 40%;
      text-align: center;
      color: white;
  }

  .cta-button {
      text-decoration: none;
      color: white;
      background: red;
      padding: 12px 50px;
      border-radius: 12px;
  }

  .restaurants-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
  }

  .restaurant {
      display: flex;
      flex-direction: column;
      width: 20%;
  }

  .restaurant-img {
      height: 55%;
      width: 100%;
  }

  .restaurant-name {
      font-weight: bold;
      margin-top: 16px;
  }

  .restaurant-type {
      margin: 0;
  }

  .restaurant-estimates {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }

  .est {
      color: grey;
      border: 2px solid lightgrey;
      padding: 5px;
      margin-right: 12px;
  }
`;

const Home = (props) => {
    return(
        <HomeStyle>
            <div className='jumbotron'>
                <div className='jumbotron-text'>
                    <h3>Your favorite food, delivered while coding.</h3>
                    <Link to='/pizza' className='cta-button'>Pizza?</Link>
                </div>
            </div>
            <div className='home-content'>
                <h4>Food Delivery in Gotham City</h4>
                <div className='restaurants-container'>
                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640'/>
                        <p className='restaurant-name'>McDonald's</p>
                        <p className='restaurant-type'>$ - American - Fast Food - Burger</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>10-30mins</p>
                            <p className='restaurant-delivery-fee est'>$5.99 Delivery Fee</p>
                        </div>
                    </div>

                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                        <p className='restaurant-name'>sweetgreen</p>
                        <p className='restaurant-type'>$ - Healthy - Salads</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>30-45mins</p>
                            <p className='restaurant-delivery-fee est'>$4.99 Delivery Fee</p>
                        </div>
                    </div>

                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/597933/pexels-photo-597933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                        <p className='restaurant-name'>Starbucks</p>
                        <p className='restaurant-type'>$ - Cafe - Coffee & Tea - Breakfast and Brunch</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>10-20mins</p>
                            <p className='restaurant-delivery-fee est'>$3.99 Delivery Fee</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='restaurants-container'>
                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640'/>
                        <p className='restaurant-name'>McDonald's</p>
                        <p className='restaurant-type'>$ - American - Fast Food - Burger</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>10-30mins</p>
                            <p className='restaurant-delivery-fee est'>$5.99 Delivery Fee</p>
                        </div>
                    </div>

                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                        <p className='restaurant-name'>sweetgreen</p>
                        <p className='restaurant-type'>$ - Healthy - Salads</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>30-45mins</p>
                            <p className='restaurant-delivery-fee est'>$4.99 Delivery Fee</p>
                        </div>
                    </div>

                    <div className='restaurant'>
                        <img className='restaurant-img' src='https://images.pexels.com/photos/597933/pexels-photo-597933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                        <p className='restaurant-name'>Starbucks</p>
                        <p className='restaurant-type'>$ - Cafe - Coffee & Tea - Breakfast and Brunch</p>
                        <div className='restaurant-estimates'>
                            <p className='restaurant-eta est'>10-20mins</p>
                            <p className='restaurant-delivery-fee est'>$3.99 Delivery Fee</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home;