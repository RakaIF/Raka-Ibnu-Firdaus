import React, { useState } from "react";
import './galleryStyle.css';
import close from '../../img/cross.png';
import img1 from '../../img/stikPS.jpg';
import img2 from '../../img/camera.jpg';
import img3 from '../../img/fotokucing.png';
import img4 from '../../img/computer.jpg';
import img5 from '../../img/kucing_1.png';
import img6 from '../../img/kucing.png';

const Gallery = () => {
  let data =[
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <section className="gallerySection" id="idGallery">
      <h2 className="titleGallery">GALLERY</h2>
      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} alt="iniFoto"/>
        <img src={close} alt="tutup" onClick={() => setModel(false)}/>
      </div>
      <div className="containerGallery">
        {
          data.map((item, index)=>{
            return(
              <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt="foto" style={{width: '100%'}}/>
              </div>
            )
          }
        )}

      </div>
    </section>
  );
}

export default Gallery;