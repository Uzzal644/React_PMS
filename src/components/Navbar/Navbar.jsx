import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
        <a href="#">Home</a>
        {/* <a href="/addproduct">Add product</a> */}
        <Link to ="/addproduct">Add product</Link>
</div>
  )
}

export default Navbar
