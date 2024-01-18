import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./EditProduct.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({})


    

    //edit product
    const handleChange= (e)=>{
        const{name,value} = e.target
        setProduct({
            ...product,
            [name] : value
        })
    }

    const editProduct = async(e)=>{
        e.preventDefault()
        const response = await axios.put("https://659e6e0247ae28b0bd35d155.mockapi.io/products/" + id, product)
        if(response.status == 200){
            navigate("/singleProduct/" + id)
        }else{
            alert("Something went wrong, try again!")
        }
    }


    useEffect(()=>{
        //fetch id of product
    const fetchProduct= async()=>{
        const response = await axios.get("https://659e6e0247ae28b0bd35d155.mockapi.io/products/" + id)
        setProduct(response.data)
    }
        fetchProduct()
    },[id])

  return (
    <>
    <Navbar />
    <div className="container">
    <h2>Edit Product</h2>
    <form onSubmit={editProduct}>
        <label htmlFor="productImage">Product Image:</label>
        <input value={product.productImage} type="text" id="productImage" name="productImage"onChange={handleChange}/>
      
      <label htmlFor="productName">Product Name:</label>
      <input value={product.productName} type="text" id="productName" name="productName"onChange={handleChange}/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea value={product.productDescription} id="productDescription" name="productDescription" rows="4" onChange={handleChange}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" onChange={handleChange}/>
      
    <input type="submit" value="Submit" />
    </form>
</div>
</>
  )
}

export default EditProduct
