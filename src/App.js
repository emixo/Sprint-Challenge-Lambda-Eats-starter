import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from 'react-router-dom'
import * as yup from 'yup'

const App = () => {



  const initialFormValues = {
    name: "",
    size: "",
    Pineapple: "false",
    Pepperoni: "false",
    Ham: 'false',
  };

  const initialFormErrors = {
    name: "",  
  };

  const formValidation = yup.object().shape({
    name: yup
      .string()
      .min(3, "username must have at least 3 characters!")
      .required("A username is required!"),
    email: yup
      .string()
      .email("a VALID email is required")
      .required("An email is required"),
    password: yup
    .string()
    .min (5, 'A password of 5 characters is required!')
    .required("A password is required"),
    terms: yup
      .boolean()
      .oneOf([true], "terms are required"),
  });


  return (
    <div>
      <header>
        <div className>
          <h1>Lambda Eats</h1>
          <nav>
            <Route path='/'>
              <Link to="/home">Home</Link>
              <Link to="/pizza">Order</Link>
              <Link>Help</Link>
            </Route>
          </nav>
        </div>
      </header>


      <section>
        <Route path="/home">
          <div>
          <h2>Order Now!</h2>
          <p>Special Deal Today only!</p>
          </div>
        </Route>
        <Route path="/pizza">
          <form>
            <h2>Your Order</h2>
            <label>Name</label>
            <input type='text'/>
            <label>Size</label>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <h2>Toppings</h2>
              <label>Pepperoni</label>
              <input type="checkbox"/>
              <label>Sausage</label>
              <input type="checkbox"/>
              <label>Pineapple</label>
              <input type="checkbox"/>
              <label>Ham</label>
              <input type="checkbox" />
              <label>Special Instructions</label>
              <input type="text" />
              <button>Place Order</button>
          </form>
        </Route>
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
