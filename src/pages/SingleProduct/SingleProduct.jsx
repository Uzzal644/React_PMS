import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./SingleProduct.css"
import axios from "axios"
import { useParams } from "react-router-dom"


const SingleProduct = () => {
    const {id} = useParams()
    //store product data coming in object
    const [product, setProduct] = useState({})
    const fetchSingleProduct = async()=>{
        const response = await axios.get("https://659e6e0247ae28b0bd35d155.mockapi.io/products/"+ id)
        setProduct(response.data)
    }
    useEffect(()=>{
        fetchSingleProduct()
    },[])


  return (
    <>
    <Navbar />
    <div className='card'>
                    <img src= {product.productImage} alt = "Product Image" />
                    <h2 className='product-name'>{product.productName}</h2>
                    <p className='product-description'>{product.productDescription}</p>
                    <mark className='product-material'>{product.productMaterial}</mark>
                </div>
                </>

  )
}

export default SingleProduct
