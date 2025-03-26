import React from 'react'
import Navbar from '../assets/components/Navbar'
import BackdropGrid from '../assets/components/BackdropGrid'
import SupportForm from '../assets/components/SupportForm'
import Faq from '../assets/components/Faq'
import Footer from '../assets/components/Footer'

const SupportPage = () => {
  return (
    <section className='w-full lg:w-screen h-full'>
           <section className='w-full'>
                       <div className="w-screen lg:w-screen">
                           <Navbar />
                       </div>
             </section>
             <section className='px-8 py-5 min-h-screen lg:px-20 w-screen lg:w-full '>
               <div className="flex gap-8 py-10 flex-col lg:flex-row">
                  <div className="flex flex-col w-full  overflow-hidden lg:w-[65%] gap-4">
                    <p className='Manrope-Bold text-5xl text-white'>Welcome to our support page!</p>
                    <p className='Manrope-Regular text-gray-400'>We're here to help you with any problems you may be having with our product.</p>
                  <div className='rounded-lg overflow-hidden flex shrink-0 h-80 justify-center w-full items-center'>
                      <BackdropGrid />
                  </div>
                  </div>
                  <div className='w-full '>
                    <SupportForm />
                  </div>
               </div>

               {/* frequently asked questions section */}
               <div className="">
                  <Faq />
               </div>

             </section>
            {/* footer */}
            <section>
              <Footer />
            </section>
    </section>
  )
}

export default SupportPage