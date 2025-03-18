import React, { useState, useEffect } from "react";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";

const SliderControl = ({ indicator = false, scrollRef, itemsPerPage }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (scrollRef?.current) {
            const totalItems = scrollRef.current.children.length; // Count items
            // const itemsPerPage = itemsPerPage; // Number of items per scroll
            setTotalPages(Math.ceil(totalItems / itemsPerPage)); // Total pages
        }
    }, [scrollRef,itemsPerPage]);

    const scroll = (direction) => {
        if (scrollRef?.current) {
            const elementWidth = scrollRef.current.children[0]?.offsetWidth + 15 || 210; // Get element width
            const scrollAmount = elementWidth * itemsPerPage; // Scroll by two elements
            const newScrollLeft = direction === "left"
                ? scrollRef.current.scrollLeft - scrollAmount
                : scrollRef.current.scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });

            // Calculate active index
            const newIndex = Math.round(newScrollLeft / scrollAmount);
            setActiveIndex(Math.min(Math.max(newIndex, 0), totalPages - 1)); // Clamp value
        }
    };

    return (
        <div className="flex justify-between items-center gap-5">
            <div onClick={() => scroll("left")} className="slidebtn cursor-pointer rounded-full p-3 border border-gray-700 text-white">
                <HiOutlineArrowSmallLeft />
            </div>

            {indicator && (
                <div className="flex gap-2 items-center">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div
                            key={index}
                            className={`indicator w-4 h-1 rounded-sm ${index === activeIndex ? "active" : " "}`}
                        ></div>
                    ))}
                </div>
            )}

            <div onClick={() => scroll("right")} className="slidebtn cursor-pointer rounded-full p-3 border border-gray-700 text-white">
                <HiOutlineArrowSmallRight />
            </div>
        </div>
    );
};

export default SliderControl;
