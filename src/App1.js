import React from 'react'
import './App.css'

export default function App1() {
  const products=[
    {id:1,Name : "Chai" ,Image:'./ChaiCup.jpg',price:100},
    {id:2,Name : "Muska Bun" ,Image:"MuskaBun.jpg",price:100},
    {id:3,Name :"biscuits" ,Image:"biscuits.jpg",price:100}
  ]
  let elements = [];
    products.forEach((product, index) => {
        elements.push(
            <div key={index} className='container'>
                <p><img src={product.Image} alt={product.name} style={{ height:'150px', width:'150px'}}/></p>
                <p>{products.name}</p>
                <p>{product.price}</p>
                <button>Add</button>
            </div>
        );
    });

  return (
        <div>
          <center><h1>Niloufer</h1></center> 
          <marquee><h3>Welcome to Niloufer</h3></marquee><hr></hr>
            <div className='main1'> 
                {elements}
            </div>  
        </div>
  )
}
