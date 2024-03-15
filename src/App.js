import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
  {id:1,Name : "Chai" ,Image:'./ChaiCup.jpg',price:100},
  {id:2,Name : "Muska Bun" ,Image:"MuskaBun.jpg",price:100},
  {id:3,Name :"biscuits" ,Image:"biscuits.jpg",price:100}
  ]
  return (
    <>
    <div>Niloufer</div>
    <div className='container'>
      <div className='items'>
   { products.map((element)=> (
        <div>
        <div>{element.Name}</div>
         <div><img src='{element.Image}'></img></div> 
        <div>{element.price}</div>
      </div>
    ))}
    </div> 
    </div>
    </>
  )
}

export default App;
