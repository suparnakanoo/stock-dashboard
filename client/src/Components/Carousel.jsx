import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
    
    <div className='flex items-center justify-center'>
        <div className='mt-20  w-[350px]'>
        <Slider {...settings}>
        {data.map((d) =>(
            <div key={data.id} className='bg-neutral-50 bg-opacity-10 h-96 rounded-xl flex flex-col items-center justify-center w-[350px] border border-zinc-600'>
                <div className='flex flex-col items-center'>
                    <img className='rounded-xl w-72 py-10'src={d.img} alt="" />
                </div>
                <div>
                    <p className='text-zinc-50 px-10'>{d.caption}</p>
                </div>
            </div>


        ))}
        </Slider>
        </div>
      
    </div>
    
  )
}

const data = [
    {   
        id: 0,
        img: `/Assets/MarketSummary.png`,
        caption: `Get the summary of current market condition`,
    },
    {
        id: 1,
        img: `/Assets/SectorPerformance.png`,
        caption: `Get the percentage change of various market sectors`,
    },
    {
        id: 2,
        img: `/Assets/MarketOverview.png`,
        caption: `Get the list of key market indices along with their current value, daily change and percentage change`,
    },
    {
        id: 3,
        img: `/Assets/Chart.png`,
        caption: `Get a line chart for the selected market index`,
    },
];

export default Carousel
