import React from "react";
import '../about/aboutStyle.css';
import FotoSaya from '../../img/foto_1.jpeg'

const About = () => {
  return (
    <section className="aboutSection" id="idAbout">
      <div className="containerAbout">
        <div className="aboutSection__left">
          <section>
            <h1 className="section-title">About Me</h1>
          </section>
          <p className="paraAbout">I am a website and 3d designer from Cirebon,
            West Java. I am a student in Universitas Pendidikan Indonesia. I love art and always
            try to show unique views to the audience through my design.
          </p> 
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={FotoSaya} alt="FotoKucing"/>
        </div>
      </div>
    </section>
  );
}

export default About;