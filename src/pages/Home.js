import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import './Home.css'
import Banner from '../components/Banner';
import Slideshow from '../components/Slideshow';
function Home() {
    const [products, setProducts] = useState([]);
    const slideshowImages = [
        "https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg",
        "https://www.shutterstock.com/image-vector/online-shopping-concept-perfect-landing-260nw-1654537690.jpg",
        "https://www.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg"

    ] 
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Slideshow images={slideshowImages}/>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
