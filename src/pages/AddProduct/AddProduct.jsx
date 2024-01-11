import { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { Navigate } from 'react-router-dom'

const AddProduct = () => {
    //FIRST APPROACH
    // const [productImage, setProductImage] = useState("")
    // const [productName, setProductName] = useState("")
    // const [productDescription, setProductDescription] = useState("")
    // const [productMaterial, setProductMaterial] = useState("")

    // const addProduct = async(e)=>{
    //     e.preventDefault()
    //     const response = await axios.post("https://659e6e0247ae28b0bd35d155.mockapi.io/products",{
    //         productName: productName,
    //         productImage: productImage,
    //         productDescription: productDescription,
    //         productMaterial: productMaterial
    //     })
    //     console.log(response)
    // }

    //SECOND APPROACH
    // const addProduct = async(e)=>{
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget); //{}

    //     const data = Object.fromEntries(formData)
    //     const response = await axios.post("https://659e6e0247ae28b0bd35d155.mockapi.io/products",data)
    //     console.log(response)
    // }

    //THIRD APPROACH
    const [data,setData] = useState({
        productName : "",
        productDescription : "",
        productMaterial : "",
        productImage : ""
    })
//     const data = {
//         productName : "",
//         productDescription : "",
//         productMaterial : "",
//         productImage : "hello"
//     }

//    data =  {
//         productName : "thisisname",
//         productDescription : "",
//         productMaterial : "",
//         productImage : "hello"
//     }
//    data =  {
//         productName : "thisisname",
//         productDescription : "thisisdescription",
//         productMaterial : "",
//         productImage : "hello"
//     }

//  data =    {
//         productName : "thisisname",
//         productDescription : "thisisdescription",
//         productMaterial : "thisismaterial",
//         productImage : "hello"
//     }
    const handleChange = (e)=>{
     const {name,value} = e.target
        setData({
            ...data,
            [name] : value
        })
       
     }

    const addProduct = async(e)=>{
        e.preventDefault()
      const response =   await axios.post("https://659e6e0247ae28b0bd35d155.mockapi.io/products",data)
      if(response.status == 201){
       Navigate("/")
      }else{
        alert("Something went wrong.Try Again")
      }

    }

  return (
    <>
    <Navbar />
    <div className="container">
    <h2>Product Information Form</h2>
    <form onSubmit={addProduct}>
        <label htmlFor="productImage">Product Image:</label>
        {/* <input type="text" id="productImage" name="productImage"  onChange={(e)=> setProductImage(e.target.value)} />

        <label htmlFor="productName" >Product Name:</label>
        <input type="text" id="productName" name="productName" onChange={(e)=> setProductName(e.target.value)}/>

        <label htmlFor="productDescription" >Product Description:</label>
        <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=> setProductDescription(e.target.value)}></textarea >

        <label htmlFor="productMaterial" >Product Material:</label>
        <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=> setProductMaterial(e.target.value)}/> */}

        {/* <input type="text" id="productImage" name="productImage"/>

        <label htmlFor="productName" >Product Name:</label>
        <input type="text" id="productName" name="productName"/>

        <label htmlFor="productDescription" >Product Description:</label>
        <textarea id="productDescription" name="productDescription" rows="4" ></textarea>

        <label htmlFor="productMaterial" >Product Material:</label>
        <input type="text" id="productMaterial" name="productMaterial"/>
         */}

        <input type="text" id="productImage" name="productImage" onChange={handleChange}   />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={handleChange}  />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={handleChange} />
      
    <input type="submit" value="Submit" />
    </form>
</div>
</>

  )
}

export default AddProduct
