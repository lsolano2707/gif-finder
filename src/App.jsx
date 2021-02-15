import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import SearchBox from './components/SearchBox';

function App() {
  const [images, setImages] = useState([]);

  const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=20&q=${search}&api_key=RPFCDXAjPiwE2Dg02U0gDe6VESvG7v1U`;
    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);

    const images = data.data.map((el) => {
      return {
        id: el.id,
        title: el.title,
        url: el.images?.downsized_medium.url,
      };
    });
    // console.log(images);
    setImages(images);
  };

  const handleSearch = (text) => {
    if (text.length) {
      getGifs(text);
    }
  };

  return (
    <>
      <Header />
      <div className="app container mx-auto mt-4">
        <SearchBox search={handleSearch} />

        <div className="mx-6 my-10 text-center">
          <ImageGrid images={images} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
