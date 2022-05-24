import React from 'react'
import logo from '../../icons/RCNY.png'
import homebkg from '../../images/posters/HERO3_shade.jpg'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <img 
                className='home-bkg'
                src={homebkg}
                alt=''
            />
            <div className='intro-poster'>
                {/* <img src={logo} className='logo' alt="Logo"/> */}
                <div className='start-btn btn'>
                <a className='web-link2 white-link'href='http://186.138.251.141/'>
                    Inmersive Experience
                </a>
                </div>
            </div>
        </div>
    )

}

export default Home
