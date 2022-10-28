import React from 'react'
import { Link , useSearchParams } from 'react-router-dom'
const Product = () => {
    const [param] = useSearchParams();
    console.log(param.get('id'),param.get('name'));
  return (
    <div>
        <Link to="product?id=99&name=ramm">product</Link>
    </div>
  )
}

export default Product