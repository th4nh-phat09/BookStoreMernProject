import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; //dot 
import 'swiper/css/navigation'; //arrow

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import BookCard from '../Book/BookCard';
const Recommend = () => {
    const [books,setBooks] =useState([])
    useEffect(()=>{
         fetch("books.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div className='py-8 ml-12'>
        <h2 className='text-3xl font-semibold font-primary mb-6 '>Recommend for you</h2>
            {/* display books*/}
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1080: {
            slidesPerView: 3, //show number of slides
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
//        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        {
             books.length >0 && books.slice(8,18).map((book,index)=>(
                <SwiperSlide key={index} ><BookCard book={book}/></SwiperSlide>
            ))}

      </Swiper>
        
    </div>
  )

}

export default Recommend