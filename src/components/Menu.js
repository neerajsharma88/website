import React from 'react'
import Logo1 from "../components/img/pizza.jpg"

export const Menu = () => {
  return (
    <div>
        <div className='menu1'>
                
                <div className="col-7">
                    <div className="about__img">
                        <img src={Logo1} alt="Pizza" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-24">
                        <h3>The Pizza Menu</h3>
                        <h1> CHICAGO THIN CRUST</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum eveniet et quae cumque vitae beatae culpa, 
                            ea quam delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, dolorem.</p>
                        <div className="banner__btn">
                            <a href="" className='btn btn-smart'>VIEW MORE</a>
                        </div>

                    </div>
                </div>


            </div>
    </div>
  )
}
export default Menu;