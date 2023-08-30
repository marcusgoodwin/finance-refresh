"use client";
import { useState } from "react";

// This is for the dummy data that shows in the table
import jsonData from '../data.json';

const Input = () => {

  // This is to track the state of the h2 on line 54. Balance is the default value which is hard coded to display($2500) and setBalance is the function that will update the value of balance when the user submits a purchase.
  const [balance, setBalance] = useState(2500);

  // This is the data for all the input tags and select tag. The default values are empty strings and 0 for price. The setFormData is the function that will update the values of the input tags and select tag when the user types in the input tags and select tag.
  const [formData, setFormData] = useState([
    {
      purchaseDate: "",
      price: 0,
      description: "",
      merchant: "",
      category: "",
    },
  ]);

  // This handle change function will update the values of the input tags and select tag when the user types in the input tags and select tag.
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (event) => {
    // prevent default behavior on browsers
    event.preventDefault();

    // This handle submit function is calling the setBalance function and getting the default value of balance($2500) and subtracting it from the price the user puts in. So EX: $2500 - $500. Then whatever the new balance would be ($2000) based on the example is set as balance and then updated to show on the page. 
    setBalance(balance - formData.price);
    
    // The setFormData function is resetting the values of the input tags and select tag to empty strings and 0 for price state after the user clicks the submit button.
    setFormData({...formData, purchaseDate: "", price: 0, description: "", merchant: "", category: ""});
  };

  // This is setting the state of purchase data with the dummy data I made from the data.json file.
  const [purchaseData, setPurchaseData] = useState(jsonData);

  // I then map through the dummy data and display it in the table. I also set the key to the index so that each row has a unique key. The purchaseInfo is just a paramater for the map method. All the table Data is then created by making a table row and table data inside with the dummy data. This all get saved to the testData variable and then passed in the tbody on line 165
  const testData = purchaseData.map((purchaseInfo, index) => {
    return (
      <tr key={index}>
        <td>{purchaseInfo.purchaseDate}</td>
        <td>{purchaseInfo.price}</td>
        <td>{purchaseInfo.description}</td>
        <td>{purchaseInfo.merchant}</td>
        <td>{purchaseInfo.category}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center text-white" id="content">
      <h1 className="pt-24 pb-8 text-4xl font-bold text-center"><span id="month"></span> Month Budget</h1>
      <h2 id="big_number" className="pb-8 text-4xl font-bold text-center">$2500.00</h2>

      <label htmlFor="purchase_date">Purchase Date</label>
      <input type="date" name="purchase_date" id="purchase_date" className="text-black focus:outline-none" />

      <label htmlFor="price" className="mt-2 text-white">Price</label>
      <div className="flex align-middle bg-white">
        <p className="text-black">$</p>
        <input type="number" name="price" id="price" step=".01" className="text-black focus:outline-none" placeholder="0.00" />
      </div>

      <label htmlFor="description" className="mt-3 text-white">Description</label>
      <input type="text" name="description" id="description" className="text-black focus:outline-none" placeholder="Description" />

      <label htmlFor="merchant" className="mt-3 text-white">Merchant</label>
      <input type="text" name="merchant" id="merchant" className="text-black focus:outline-none" placeholder="Merchant" />

      <label htmlFor="category" className="mt-3 text-white">Category</label>
      <select id="category" className="text-black focus:outline-none">
  <option value="">Select a category</option>
  <option value="auto">Auto</option>
  <option value="clothing">Clothing</option>
  <option value="debt">Debt</option>
  <option value="education">Education</option>
  <option value="entertainment">Entertainment</option>
  <option value="food">Food</option>
  <option value="gifts/donation">Gifts/Donation</option>
  <option value="housing">Housing</option>
  <option value="insurance">Insurance</option>
  <option value="medical">Medical</option>
  <option value="retirement">Retirement</option>
  <option value="savings">Savings</option>
  <option value="supplies">Supplies</option>
  <option value="other">Other</option>
</select>


      <br />

      <input
        type='button'
        name='button'
        id='btn'
        value='Submit'
        className='p-3 px-6 py-2 pt-2 my-2 text-black rounded-lg group bg-gradient-to-br from-pink-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
        onClick={handleSubmit}
      />

      <table id='transactions_table' className='mt-8 mb-8 text-white'>
        <thead>
          <tr className='flex gap-4 text-2xl font-bold text-center text-white'>
            <th> Purchase Date </th>
            <th> Price </th>
            <th> Description </th>
            <th> Merchant </th>
            <th> Category </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>{formData.price}</td>
            <td>{formData.description}</td>
            <td>{formData.merchant}</td>
            <td>{formData.category}</td>
          </tr> */}
          {testData}
        </tbody>
      </table>
    </div>
  );
};

export default Input;
