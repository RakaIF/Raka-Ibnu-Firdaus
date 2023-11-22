import React from "react";
import './homeStyle.css';
import btnImg from '../../img/user.png'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="idHome">
      <div className="HomeContent">
        <span className="Hallo">Hallo,</span>
        <span className="Intro">I'm <span className="introName">Raka Ibnu Firdaus</span> Graphic Design</span>
        <p className="paragraf">I am a student at Universitas Pendidikan Indonesia 
        with experience in creating a design web and 3D</p>
        <Link to="/"><button className="btn"><img src={btnImg} alt="Contact Me" className='btnImg'/>Contact Me</button></Link>
      </div> 
    </section>
  );
}

export default Home;