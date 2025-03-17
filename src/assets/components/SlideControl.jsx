import React from 'react'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";

const SlideControl = () => {
  return (
    <div className="catt hidden md:flex w-44 p-2 gap-2 rounded-md justify-between items-center">
                <div className="catIcon text-gray-300 p-2 rounded-sm">
                  <HiOutlineArrowSmallLeft />
                </div>
                <div className="indicators flex gap-1">
                  <div className="indicator w-4 h-1 rounded-sm active"></div>
                  <div className="indicator w-4 h-1 rounded-sm"></div>
                  <div className="indicator w-4 h-1 rounded-sm"></div>
                  <div className="indicator w-4 h-1 rounded-sm"></div>
                </div>
                <div className="catIcon text-gray-300 p-2 rounded-sm">
                  <HiOutlineArrowSmallRight />
                </div>
              </div>
  )
}

export default SlideControl