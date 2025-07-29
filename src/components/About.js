import React from 'react'
import Logo1 from "../components/img/pizza.jpg"

export const About = () => {
    return (
        <div className='about'>
            <div className='about1'>
                <div className="row">
                    <div className="p-25">
                        <h3>About Us</h3>
                        <h1>WELLCOME TO MAESTRO PIZZINNI</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum eveniet et quae cumque vitae beatae culpa, 
                            ea quam delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, dolorem.</p>
                        <div className="banner__btn">
                            <a href="" className='btn btn-smart'>READ MORE</a>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="about__img">
                        <img src={Logo1} alt="Pizza" />
                    </div>
                </div>


            </div>
        </div>
    )
}
export default About;