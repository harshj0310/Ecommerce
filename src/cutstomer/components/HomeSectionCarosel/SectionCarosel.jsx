import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; // Ensure this is the correct path and properly exported
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';  
import { mens_kurta } from '../../../data1/Menskurta';

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);  // Reference to AliceCarousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  
  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="relative lg:px-8 border">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5 text-left'>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}  // Assign reference to AliceCarousel
          items={items}
          disableButtonControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="previous"
          >
            <ArrowBackIosIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
