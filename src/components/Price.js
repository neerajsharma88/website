import React from 'react'
import Logo2 from "../components/img/pizza1.png"
import Logo3 from "../components/img/pizza2.png"
import Logo4 from "../components/img/pizza3.png"

export const Price = () => {
    return (
        <div className='prices'>
            <div className="row2">
                <div className="col-4">
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo2} alt="" />
                        </div>
                        <h1 className="price__heading">
                            Pizza Margerittas
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$18.00</div>

                    </div>
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo3} alt="" />
                        </div>
                        <h1 className="price__heading">Beer Pizza Crust</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$25.00</div>

                    </div>
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo4} alt="" />
                        </div>
                        <h1 className="price__heading">
                          Pizza Biscuit Bake
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$99.00</div>

                    </div>
                  
                    
                    
                </div>


                <div className="col-4">
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo2} alt="" />
                        </div>
                        <h1 className="price__heading">
                            Pizza Margerittas
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$50.00</div>

                    </div>
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo3} alt="" />
                        </div>
                        <h1 className="price__heading">Beer Pizza Crust</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$25.00</div>

                    </div>
                    <div className="price">
                        <div className="price__img">
                            <img src={Logo4} alt="" />
                        </div>
                        <h1 className="price__heading">
                          Pizza Biscuit Bake
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus placeat repudiandae voluptate pariatur non ipsam 
                              tenetur eligendi voluptatum odio, natus sequi, praesentium animi ipsum!ss</p>
                    <div className="price_rs">$99.00</div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Price;