import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./SingleProduct.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const SingleProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    //store product data coming in object
    const [product, setProduct] = useState({})

    //delete product
    const deleteProduct = async()=>{
        //api hit to delete
        const response = await axios.delete("https://659e6e0247ae28b0bd35d155.mockapi.io/products/"+ id)
        if(response.status == 200){
            navigate("/")
        }else{
            alert("Something went wrong, please try again!")
        }
    }



    useEffect(()=>{
            //fetch a single product
    const fetchSingleProduct = async()=>{
        const response = await axios.get("https://659e6e0247ae28b0bd35d155.mockapi.io/products/"+ id)
        setProduct(response.data)
    }
        fetchSingleProduct()
    },[id])


  return (
    <>
    <Navbar />
    <div className='card'>
                    <img src= {product.productImage} alt = "Product Image" />
                    <h2 className='product-name'>{product.productName}</h2>
                    <p className='product-description'>{product.productDescription}</p>
                    <mark className='product-material'>{product.productMaterial}</mark> <br/>
                    <button onClick={deleteProduct}>Delete</button>
                    <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>
                </div>
                </>

  )
}

export default SingleProduct
