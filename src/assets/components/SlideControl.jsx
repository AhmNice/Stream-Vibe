import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";

const SlideControl = ({ indicator = true, scrollRef, itemsPerPage = 5 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Function to check of the scrollRef is defined or has children
  const checkScrollRef = ()=>{
    if(scrollRef?.current && scrollRef.current.children.length > 0){
      const totalItems = scrollRef.current.children.length;
      const calculatedPages = Math.ceil(totalItems / itemsPerPage)
      setTotalPages(calculatedPages);
    }else{
      console.log('scrollRef.current is not defined or has no children ... // line 15')
      setTimeout(checkScrollRef,1000)
    }
  }

  useEffect(() => {
    checkScrollRef();
  }, [scrollRef, itemsPerPage]);


  const scroll = (direction) => {
    if (scrollRef?.current) {
      const elementWidth = scrollRef.current.children[0]?.offsetWidth || 260;
      const scrollAmount = elementWidth * itemsPerPage;
      const newScrollLeft =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update the active index manually
      const newIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
      setActiveIndex(Math.min(Math.max(newIndex, 0), totalPages - 1));
    }
  };

  return (
    <div className="catt hidden md:flex w-44 p-2 gap-2 rounded-md justify-between items-center">
      <div onClick={() => scroll('left')} className="catIcon text-gray-300 p-2 rounded-sm cursor-pointer">
        <HiOutlineArrowSmallLeft />
      </div>

      {indicator && totalPages > 1 && (
        <div className="indicators flex gap-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`indicator w-4 h-1 rounded-sm transition-all duration-300 ${
                index === activeIndex ? 'active' : 'bg-gray-500'
              }`}
            ></div>
          ))}
        </div>
      )}

      <div onClick={() => scroll('right')} className="catIcon text-gray-300 p-2 rounded-sm cursor-pointer">
        <HiOutlineArrowSmallRight />
      </div>
    </div>
  );
};

export default SlideControl;
