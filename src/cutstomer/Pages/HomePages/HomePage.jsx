import React from 'react';
import MainCrosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/SectionCarosel';
import { mens_kurta } from '../../../data1/Menskurta';

function HomePage() {
  return (
    <div>
      <MainCrosel />

      {/* Adding margin-top to create a gap between MainCrosel and HomeSectionCarosel */}
      <div className="mt-8 py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10"> {/* Adjust the value of mt-8 as per your gap requirement */}
        <HomeSectionCarosel data={mens_kurta} sectionName={"mens_kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"mens_shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"mens_shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"womens_saree"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"womens_dress"}/>
        
       
      </div>
    </div>
  );
}

export default HomePage;
