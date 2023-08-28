const input = () => {
  return (
    <>
    <h1 className="flex justify-center text-6xl font-bold text-white mt-96">Budget!</h1>
    <h2 className="flex justify-center text-6xl font-bold text-white mt-96">I like money</h2>
    <form className="flex flex-col justify-center">
        <input name="category"placeholder="Shoes"/>
        <input name="price" placeholder="$12"/>
        <input name="quantity"placeholder="85"/>
    </form>
    </>
  )
}

export default input