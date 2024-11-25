import React, { useEffect, useState } from 'react'
import BookCard from '../Book/BookCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; //dot 
import 'swiper/css/navigation'; //arrow

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    const [books,setBooks] =useState([])
    const [selectedCategory,setSelectedCategory] =useState("Choose a genre")
    useEffect(()=>{
         fetch("books.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    //console.log( books);
    //console.log('sss');
    const filteredBooks = selectedCategory === "Choose a genre" ? books : 
                                                                        books.filter(book => book.category === selectedCategory.toLowerCase())
 //   console.log(filteredBooks);
    

  return (
    <div className='py-8 ml-12'>
        <h2 className='text-3xl font-semibold font-primary mb-6 '>TopSellers</h2>
        <div className='mb-6 flex items-center'>
            <select 
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              name="category" id="category" 
              className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-1 focus:outline-none'>
                { categories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>

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
        className="mySwiper"
      >
        {
             filteredBooks.length >0 && filteredBooks.map((book,index)=>(
                <SwiperSlide key={index} ><BookCard book={book}/></SwiperSlide>
            ))}

      </Swiper>
        
    </div>
  )
}

export default TopSellers