import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from 'react-router-dom'
import * as yup from 'yup'
import Form from './components/Form'


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

const App = () => {

  const [orders, setOrders] = useState([]);
  const [formDisabled, setFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    yup
      .reach(formValidation, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const formValidation = yup.object().shape({
    name: yup
      .string()
      .min(2, "username must have at least 3 characters!")
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


  useEffect(() => {
    formValidation.isValid(formValues).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [formValues]);

  const checkboxChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  const submitOrder = (event) => {
    event.preventDefault();

    const newOrder = {
      name: formValues.name,
      size: formValues.email,
      Pepperoni: formValues.Pepperoni,
      Sausage: formValues.Sausage,
      Pineapple: formValues.Pineapple,
      Ham: formValues.Ham,
      special: formValues.special
    };
    setFormValues(initialFormValues);
  };


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
          <Form 
          values={formValues}
          changeValues={changeValues}
          checkboxChange={checkboxChange}
          disabled={formDisabled}
          submitOrder={submitOrder}
          errors={formErrors}
          />
        </Route>
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
