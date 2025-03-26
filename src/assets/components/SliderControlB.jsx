import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2';

const SliderControlB = ({ indicator = true, scrollRef, itemsPerPage = 1 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Function to check if scrollRef is defined and has children
  const checkScrollRef = () => {
    if (scrollRef?.current && scrollRef.current.children.length > 0) {
      const totalItems = scrollRef.current.children.length;
      const calculatedPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(calculatedPages);

      console.log("Total items:", totalItems);
      console.log("Total pages:", calculatedPages);
    } else {
      console.log("scrollRef.current is not defined or has no children");
      setTimeout(checkScrollRef, 100); // Check again after 100ms
    }
  };

  // Update totalPages when the component mounts and when movies change
  useEffect(() => {
    checkScrollRef();
  }, [scrollRef, itemsPerPage]);

  // Scroll event listener to update activeIndex
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef?.current) {
        const elementWidth = scrollRef.current.children[0]?.offsetWidth || 500;
        const newIndex = Math.round(scrollRef.current.scrollLeft / elementWidth);
        setActiveIndex(Math.min(Math.max(newIndex, 0), totalPages - 1));
      }
    };

    if (scrollRef?.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef?.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollRef, totalPages]);

  // Function to scroll left or right
  const scroll = (direction) => {
    if (scrollRef?.current) {
      const elementWidth = scrollRef.current.children[0]?.offsetWidth || 500;
      const scrollAmount = elementWidth * itemsPerPage;
      const newScrollLeft =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex justify-between items-center gap-5 w-full px-10">
      {/* Left Arrow */}
      <div
        onClick={() => scroll('left')}
        className="slidebtn cursor-pointer rounded-md p-4 border border-gray-700 text-white"
      >
        <HiOutlineArrowSmallLeft />
      </div>

      {/* Indicators */}
      {indicator && totalPages > 1 && (
        <div className="flex gap-3 items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-4 h-1 indicator rounded-sm transition-all duration-300 ${
                index === activeIndex ? 'active' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      )}

      {/* Right Arrow */}
      <div
        onClick={() => scroll('right')}
        className="slidebtn cursor-pointer rounded-md p-4 border border-gray-700 text-white"
      >
        <HiOutlineArrowSmallRight />
      </div>
    </div>
  );
};

export default SliderControlB;