import React from 'react';

export default function Form({
    values,
    changeValues,
    checkboxChange,
    submitOrder,
    disabled,
    errors,
}) {
    return (
          <form>
            <h2>Your Order</h2>
            <label>Name</label>
            <input type='text' onChange={changeValues} name='name' values={values.name}    />
            <label>Size</label>
            <select value={values.size} onChange={changeValues}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <h2>Toppings</h2>
              <label>Pepperoni</label>
              <input type="checkbox" name='Pepperoni' onChange={checkboxChange} />
              <label>Sausage</label>
              <input type="checkbox"name="Sausage" onChange={checkboxChange} />
              <label>Pineapple</label>
              <input type="checkbox"name="Pineapple" onChange={checkboxChange} />
              <label>Ham</label>
              <input type="checkbox" name="Ham" onChange={checkboxChange} />
              <label>Special Instructions</label>
              <input type="text"  name="special" onChange={changeValues} />
              <button onClick={submitOrder}>Place Order</button>
          </form>
    
    )
}