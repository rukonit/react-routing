import React from 'react'
import { useParams, use } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()
  return (
    <div>{params.productId}</div>
  )
}

export default ProductDetails