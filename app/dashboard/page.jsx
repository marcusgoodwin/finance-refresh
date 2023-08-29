"use client";
import { useState } from 'react';



const Input = () => {

  const [balance, setBalance] = useState(2500);
  const [purchasePrice, setPurchasePrice] = useState(0);


  function addPurchase() {
       setBalance(balance - purchasePrice);
  }
  
  return (
    <div
      className="flex flex-col items-center justify-center text-white"
      id="content"
    >
      <h1 className="pt-24 pb-8 text-4xl font-bold text-center">
        <span id="month"></span> Month Budget
      </h1>
      <h2 id="big_number" className="pb-8 text-4xl font-bold text-center">
        ${balance}
      </h2>

      <label htmlFor="purchase_date">Purchase Date</label>
      <input
        type="date"
        name="purchase_date"
        id="purchase_date"
        className="text-black focus:outline-none"
      />

      <label htmlFor="price" className="mt-2 text-white">
        Price
      </label>
      <div className="flex align-middle bg-white">
        <p className="text-black">$</p>
        <input
          type="number"
          name="price"
          id="price"
          step=".01"
          className="text-black focus:outline-none"
          placeholder="0.00"
          value={purchasePrice}
          onChange={(event) => setPurchasePrice(parseFloat(event.target.value))}


        />
      </div>

      <label htmlFor="description" className="mt-3 text-white">
        Description
      </label>
      <input
        type="text"
        name="description"
        id="description"
        className="text-black focus:outline-none"
        placeholder="Description"
      />

      <label htmlFor="merchant" className="mt-3 text-white">
        Merchant
      </label>
      <input
        type="text"
        name="merchant"
        id="merchant"
        className="text-black focus:outline-none"
        placeholder="Merchant"
      />

      <label htmlFor="category" className="mt-3 text-white">
        Category
      </label>
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
        type="button"
        name="button"
        id="btn"
        value="Submit"

        onClick={() => {
          addPurchase();
        }}

        
        className="p-3 px-6 py-2 pt-2 my-2 text-black rounded-lg group bg-gradient-to-br from-pink-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      />

      <table id="transactions_table" className="mt-8 mb-8 text-white">
        <tbody>
          <tr className="flex gap-4 text-2xl font-bold text-center text-white">
            <th> Purchase Date </th>
            <th> Price </th>
            <th> Description </th>
            <th> Merchant </th>
            <th> Category </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Input;
