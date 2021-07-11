import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/style/App.scss';

const API = 'http://localhost:3000/initalState'

const App = () =>{

     const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1>:(
    <div className="App">
          <Header />
          <Search />
          {initialState.mylist.length > 0 && //si mylist No esta vacio
              <Category title = 'mi lista'>
                <Carousel>
                  {initialState.mylist.map(item =>
                  <CarouselItem key = {item.id} {...item} />
                  )}
                </Carousel>
              </Category>
          }

          <Category title= 'tendencia'>
              <Carousel>
                  {initialState.trends.map(item =>
                    <CarouselItem key={item.id} {...item} />
                  )}
                  
              </Carousel>
          </Category>

          <Category title= 'Originales De Platzi Video'>
              <Carousel>
                  {initialState.originals.map(item =>
                    <CarouselItem key={item.id} {...item} />
                  )}
                  
              </Carousel>
          </Category>

          <Footer />
    </div>
    
    )}

export default App;