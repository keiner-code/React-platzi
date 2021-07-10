import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App = () =>(
    <div className="App">
          <Header />
          <Search />

          <Category>
              <Carousel>
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
              </Carousel>
          </Category>

          <Category>
              <Carousel>
                  <CarouselItem />
                  <CarouselItem />
              </Carousel>
          </Category>
          <Footer />
    </div>
    
);

export default App;