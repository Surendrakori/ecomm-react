import React from 'react'

export default function Niloufer() {
    const products = [
        {id:1,Name : "Chai" ,Image:'/ECOMM-REACT/ChaiCup.jpg',price:100},
        {id:2,Name : "Muska Bun" ,Image:"/ECOMM-REACT/MuskaBun.jpg",price:100},
        {id:3,Name :"biscuits" ,Image:"/ECOMM-REACT/biscuits.jpg",price:100}
        ]
  return (
        <>
    <div>Niloufer</div>
    <div className='container'>
      <div className='items'>
   { products.map((element)=> (
        <div>
        <div>{element.Name}</div>
        <div><img src={element.Image}></img></div>
        <div>{element.price}</div>
      </div>
    ))}
    </div> 
    </div>
    </>

  )
}
