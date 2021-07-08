import React from 'react';

import '../assets/style/components/Carousel.scss';

const Carousel = ({Children}) => (
 <section className="carousel">
     <div className="carousel_container">
         {Children}
     </div>
 </section>
);

export default Carousel;