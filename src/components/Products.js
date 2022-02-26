import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div><h1>Welcome To The product Page</h1> 
    <Link to="/products/1">Book 1</Link>
    <Link to="/products/2productId">Book 2</Link>
    <Link to="/products/3productId">Book 3</Link>
    </div>
   
  )
}

export default Products