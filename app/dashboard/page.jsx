import React from 'react';

const Input = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white" id="content">
      <label htmlFor="purchase_date">Purchase Date</label>
      <input type="date" name="purchase_date" id="purchase_date" className='text-black'/>

      <label htmlFor="price" className='text-white'>Price</label>
      <input type="number" name="price" id="price" step=".01" className='text-black' placeholder='$0.00' />

      <label htmlFor="description" className='text-white'>Description</label>
      <input type="text" name="description" id="description" className='text-black' placeholder='Description' />

      <label htmlFor="merchant" className='text-white'>Merchant</label>
      <input type="text" name="merchant" id="merchant" className='text-black' placeholder='Merchant'/>

      <label htmlFor="category" className='text-white' >Category</label>
      <select id="category" className='text-black'>
        <option value="Housing">Housing</option>
        <option value="Auto">Auto</option>
        <option value="Food">Food</option>
        <option value="Utilities">Utilities</option>
        <option value="Clothing">Clothing</option>
        <option value="Medical">Medical</option>
        <option value="Insurance">Insurance</option>
        <option value="Supplies">Supplies</option>
        <option value="Debt">Debt</option>
        <option value="Retirement">Retirement</option>
        <option value="Education">Education</option>
        <option value="Savings">Savings</option>
        <option value="Gifts/Donations">Gifts/Donations</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

  
      <br />
      {/* apparently this is a link break ^^^  */}
      
      <input
        type="button"
        name="button"
        id="btn"
        value="Submit"
        className="p-3 px-6 py-2 pt-2 my-2 text-black rounded-lg group bg-gradient-to-br from-pink-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      />

      <table id="transactions_table" className="mt-8 mb-8 text-white">
        <tr className="flex text-2xl font-bold text-center text-white">
          <th className="mx-4"> Purchase Date </th>
          <th className="mx-4"> Price </th>
          <th className="mx-4"> Description </th>
          <th className="mx-4"> Merchant </th>
          <th className="mx-4"> Category </th>
        </tr>
      </table>
    </div>
  );
};

export default Input;
