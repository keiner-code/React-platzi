import React from 'react';
import '../assets/style/components/CarouselItem.scss';

const Carouselitem = () =>(
  <div className="carousel-item">
  <img className="carousel-item__img" src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg" alt="imagen"  />
  <div className="carousel-item__details">
    <div>
      <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon"/> 
      <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon"/> 
    </div>
    <p className="carousel-item__details--title">Título descriptivo</p>
    <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
  </div>
</div>
);

export default Carouselitem;