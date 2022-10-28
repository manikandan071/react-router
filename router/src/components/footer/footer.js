import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const navigate = useNavigate();
    const aboutPage=()=>{
        navigate('About/7')
    }
    const contactPage=()=>{
        navigate('Contact')
    }
    const teamPage=()=>{
        navigate('Team')
    }
    const productPage=()=>{
        navigate({
            pathname:'Product',
            search:'?id=6&name=mani',
        })
    }
    const dataPage=()=>{
        navigate('Data/8')
    }
  return (
    <div className='footer'>
        <button onClick={()=>aboutPage()}>About</button>
        <button onClick={()=>contactPage()}>Contact</button>
        <button onClick={()=>teamPage()}>Team</button>
        <button onClick={()=>productPage()}>Product</button>
        <button onClick={()=>dataPage()}>Data</button>
    </div>
  )
}

export default Footer