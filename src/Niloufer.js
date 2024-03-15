import React from 'react'
import './Niloufer.css'

export default function Niloufer() {
    const products = [
        {id:1,Name : "Platinum -Blend" ,Image:'/ECOMM-REACT/platinum.jpg',price:175},
        {id:2,Name : "Double -Delight" ,Image:"/ECOMM-REACT/DoubleDelight.jpg",price:150},
        {id:3,Name :"Super Dust" ,Image:"/ECOMM-REACT/SuperDust.jpg",price:100},
        {id:4,Name :"Osmania" ,Image:"/ECOMM-REACT/Osmania.jpg",price:100},
        {id:5,Name :"Dry Fruits" ,Image:"/ECOMM-REACT/DryFruitBiscuits.jpg",price:100},
        {id:6,Name :"Multigrain" ,Image:"/ECOMM-REACT/MultigrainBiscuits.jpg",price:100}
        ]
  return (
        <>
        <nav className='navbar'>
         <img src='/ECOMM-REACT/NilouferLogo.jpg' ></img>
         <div>Home</div>
         <div>About Us</div>
         <div>Niloufer Tea</div>
         <div>Outlets</div>
         <div>Login / SignUp</div>
         </nav>
      <section> <img src='/ECOMM-REACT/scenary.jpg' width="1345px"></img></section>
      <div className='container'>
   { products.map((element)=> (
        <div className='item'>
        <div><img src={element.Image}></img></div>
        <div>{element.Name}</div>
        <div className='cart-btn'>{element.price} {<button id='cart-btn'>ADD TO CART</button>}</div>
        <span></span>
      </div>
    ))}
    </div>
    </>
  )
}
