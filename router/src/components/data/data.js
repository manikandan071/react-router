import React from 'react'
import { Link, useParams } from 'react-router-dom'
const Data = () => {
    const param = useParams();
    console.log(param);
  return (
    <div>
        <Link to="data/7">data</Link>
    </div>
  )
}

export default Data