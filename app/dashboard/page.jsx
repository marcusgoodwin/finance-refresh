const input = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="flex justify-end">Logout</div>
        </nav>
      </header>
      <h1 className="flex justify-center text-6xl font-bold text-white mt-80">
        Budget!
      </h1>
      <h2 className="flex justify-center mt-56 text-6xl font-bold text-white">
        I like money
      </h2>
      <form className="flex flex-col items-center gap-2 mt-4">
        <p>Category</p>
        <select className="bg-slate-500" name="category">
          <option placeholder="">Select a category</option>
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
        <p>Price</p>
        <input className="bg-slate-500" name="price" placeholder="$12" />
        <p>Quantity</p>
        <input className="bg-slate-500" name="quantity" placeholder="85" />
        <p>Merchant</p>
        <input className="bg-slate-500" name="merchant" placeholder="walmart" />
        <div name="buttons" className="flex align-middle">
          <button className="flex gap-0 bg-green-600 rounded-md">
            Increase
          </button>
          <button className="flex gap-2 ml-8 bg-red-600 rounded-md">
            Decrease
            </button>
        </div>
      </form>
    </div>
  );
};

export default input;
