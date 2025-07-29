import React from 'react'
import App from '../App'
import Navbar from './Navbar'

export const Header = () => {
  return (

    <div className='banner'>
      <Navbar />
      <div className="container1">

        <div className="container2">

          <div className='container'>

            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZZINNI</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum eveniet et quae cumque vitae beatae culpa, ea quam
              delectus!</p>
            <div className="banner__btn">
              <a href="" className='btn btn-smart'>Delivery Now</a>
            </div>

          </div>
        </div>


      </div>


    </div>

  )
}
export default Header