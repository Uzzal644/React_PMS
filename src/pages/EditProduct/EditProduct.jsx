import Navbar from "../../components/Navbar/Navbar"

const EditProduct = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <h2>Product Information Form</h2>
    <form >
        <label htmlFor="productImage">Product Image:</label>
        <input type="text" id="productImage" name="productImage"/>
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial"/>
      
    <input type="submit" value="Submit" />
    </form>
</div>
</>
  )
}

export default EditProduct
