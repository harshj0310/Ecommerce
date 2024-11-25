import React from 'react';
import { mainCaroseldata } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainCarosel.css'; // Add custom CSS file if needed

const MainCarosel = () => {
    const items = mainCaroseldata.map((item) => (
        <img
            className='carousel-image' // Custom class for the images
            role='presentation'
            src={item.image}
            alt="Carousel item"
            onClick={() => window.location.href = item.path} // Handle clicks if necessary
        />
    ));

    return (
        <div className="carousel-container">
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    );
}

export default MainCarosel;
