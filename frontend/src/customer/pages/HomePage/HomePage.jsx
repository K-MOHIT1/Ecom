import React from 'react'
import MainCarousal from '../../containers/HomeCarousal/MainCarousal'
import HomeSectionCarousal from '../../containers/HomeSectionCarousal/HomeSectionCarousal'
import {mens_kurta} from '../../../Data/Men/mens_kurta.js'

const HomePage = () => {
  return (
    <div>
        <div className="w-full">
             <MainCarousal></MainCarousal>
        </div>
     

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage
