import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async()=>{

        const response = await axios.get("https://659e6e0247ae28b0bd35d155.mockapi.io/products")
        setProducts(response.data)

    }
    
    useEffect(()=>{
        fetchProducts()
    },[])



  return (
    <>
    <Navbar />
    <div className="card-container">
        
    {
        products.map((product)=>{
            return (
                <div key={product.id} className='card'>
                    <img src= {product.productImage} alt = "Product Image" />
                    <h2 className='product-name'>{product.productName}</h2>
                    <p className='product-description'>{product.productDescription}</p>
                    <h5 className='product-material'>{product.productMaterial}</h5>
                    <Link to={`/singleProduct/${product.id}`}>See more</Link>

                </div>
            )
        })
    }
    
    </div>


    </>
  )
  
}

export default Home
